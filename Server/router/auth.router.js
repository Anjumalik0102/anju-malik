const express = require("express");
const Message = require("../models/user-models");
const nodemailer = require("nodemailer");
const router = express();

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or App password
    },
});

// Route to send multiple messages
router.post('/sendmessage', async (req, res) => {
    try {
        const messageData = req.body;

        const currentDate = new Date();
        const message = new Message({
            ...messageData,
            date: messageData.date || currentDate  // Add date if not provided
        });
        await message.save();

        // HTML email to you (the website owner)
        const emailHTMLToOwner = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0; }
                        .email-container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
                        .header { background-color: #3b5998; color: #ffffff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                        .header h1 { margin: 0; font-size: 24px; }
                        .content { padding: 20px; }
                        .content p { font-size: 16px; color: #333333; margin: 10px 0; }
                        .content h2 { color: #3b5998; font-size: 20px; }
                        .content .info { padding: 8px 16px; background-color: #f2f2f2; border-radius: 4px; margin: 8px 0; }
                        .footer { background-color: #3b5998; color: #ffffff; text-align: center; padding: 10px; font-size: 12px; border-radius: 0 0 8px 8px; }
                        .footer p { margin: 0; }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1>Portfolio message</h1>
                        </div>
                        <div class="content">
                            <h2>Message Details:</h2>
                            <p><strong>Name:</strong> ${messageData.name}</p>
                            <p><strong>Email:</strong> ${messageData.email}</p>
                            <p><strong>Phone:</strong> ${messageData.phone}</p>
                            <div class="info">
                                <strong>Message:</strong>
                                <p>${messageData.message}</p>
                            </div>
                            <p><strong>Date:</strong> ${currentDate.toString()}</p>
                        </div>
                        <div class="footer">
                            <p>Sent via Your Website Contact Form</p>
                        </div>
                    </div>
                </body>
            </html>
        `;

        // HTML email to sender (thank you message)
        const emailHTMLToSender = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0; }
                        .email-container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
                        .header { background-color: #28a745; color: #ffffff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                        .header h1 { margin: 0; font-size: 24px; }
                        .content { padding: 20px; }
                        .content p { font-size: 16px; color: #333333; margin: 10px 0; }
                        .footer { background-color: #28a745; color: #ffffff; text-align: center; padding: 10px; font-size: 12px; border-radius: 0 0 8px 8px; }
                        .footer p { margin: 0; }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1>Thank You for Reaching Out!</h1>
                        </div>
                        <div class="content">
                            <p>Hi ${messageData.name},</p>
                            <p>Thank you for getting in touch with me! I have received your message and will get back to you as soon as possible.</p>
                            <p>Here’s the information you submitted:</p>
                            <ul>
                                <li><strong>Name:</strong> ${messageData.name}</li>
                                <li><strong>Email:</strong> ${messageData.email}</li>
                                <li><strong>Phone:</strong> ${messageData.phone}</li>
                                <li><strong>Message:</strong> ${messageData.message}</li>
                            </ul>
                            <p>I appreciate your interest and will contact you shortly.</p>
                        </div>
                        <div class="footer">
                            <p>Best Regards</p>
                            <p>Anju Malik</p>
                        </div>
                    </div>
                </body>
            </html>
        `;

        // Send the email to the website owner (you)
        const mailOptionsToOwner = {
            from: process.env.GMAIL_USER, // Sender address
            to: process.env.GMAIL_USER,   // Receiver address (your Gmail)
            subject: 'Portfolio message', // Email subject
            html: emailHTMLToOwner, // HTML content to you
        };

        // Send the email to the sender (confirmation)
        const mailOptionsToSender = {
            from: process.env.GMAIL_USER, // Sender address
            to: messageData.email,       // Receiver address (the sender's email)
            subject: 'Thank You for Contacting Us', // Subject for the confirmation email
            html: emailHTMLToSender, // HTML content to the sender
        };

        // Send both emails: to owner and sender
        transporter.sendMail(mailOptionsToOwner, (error, info) => {
            if (error) {
                console.log("Error sending email to owner: ", error);
                return res.status(500).send({ message: "Message sent, but failed to notify owner via email." });
            } else {
                console.log("Email sent to owner: " + info.response);
            }
        });

        transporter.sendMail(mailOptionsToSender, (error, info) => {
            if (error) {
                console.log("Error sending email to sender: ", error);
                return res.status(500).send({ message: "Message sent, but failed to notify sender via email." });
            } else {
                console.log("Confirmation email sent to sender: " + info.response);
            }
        });

        res.status(200).send({ message: "Messages delivered successfully and confirmation sent to the sender!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
