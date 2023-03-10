import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Button, Spacer, Description, Input, Divider, Textarea } from '@geist-ui/react';
import { toaster } from 'evergreen-ui';

import * as emailjs from 'emailjs-com';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',email: '',subject: '',message: ''};
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    resetForm() {this.setState({name: '',email: '',subject: '',message: '',});}
    handleChange(event) {this.setState({ [event.target.name]: event.target.value });}

    render() {
        // eslint-disable-next-line
        const { name, email, subject, message, sentMessage } = this.state;
        return (
            <div style={{position:'relative', width: '100%', marginBottom: '300px'}}>
                <canvas id="gradient-canvas" style={{maxHeight: '180px'}} data-js-darken-top data-transition-in />
                <div style={{position: "absolute", top: '0', left: '0', width: '100%', height: '100%'}}>
                    <Section style={{height: '100%'}}>
                        <Container style={{height:'100%'}}>
                            <Text h1 className="hero-text pre-white">Contact Ryan Wans</Text>
                            <Spacer y={2} />
                            <div className="columns">
                                <div className="column is-half">
                                    <div className="pre-card pre-bigshadow">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="pre-padding-std">
                                                <div className="columns">
                                                    <div className="column is-half">
                                                        <Input status="secondary" width="100%" required name="name" type="text" value={name} onChange={this.handleChange} >
                                                            <Description title="Your Name" />
                                                        </Input>
                                                    </div>
                                                    <div className="column is-half">
                                                        <Input status="secondary" width="100%" required name="email" type="email" value={email} onChange={this.handleChange} >
                                                            <Description title="Your Email" />
                                                        </Input>
                                                    </div>
                                                </div>

                                                <Divider />

                                                <Input status="secondary" width="100%" name="subject" type="text" value={subject} onChange={this.handleChange} >
                                                    <Description title="Message Subject(s)" />
                                                </Input>

                                                <Divider />

                                                <Description title="Your Message" />
                                                <Textarea width="100%" status="secondary" required name="message" value={message} onChange={this.handleChange} ></Textarea>
                                            </div>
                                            <div className="contact-footer">
                                                <div className="columns">
                                                    <div className="column is-two-thirds">
                                                        <Text p className="pre-white pre-wnorm">You can also contact directly at 
                                                            <a href="mailto:ryan@ryanwans.com" className="pre-white pre-bold"> ryan@ryanwans.com</a>
                                                        </Text>
                                                    </div>
                                                    <div className="column is-one-third" type="submit">
                                                        <Button type="success" ghost className="pre-bold" id="contact-btn" style={{marginTop: '8px'}} onClick={() => {
                                                            toaster.notify("Sending message...");
                                                            const { name, email, subject, message } = this.state;
                                                            const templateParams = {name: name,email: email,subject,message,ip: window.ip||"Unidentifiable"};
                                                            emailjs.send(
                                                                'service_biw49qg',
                                                                'template_c52icuu',
                                                                templateParams,
                                                                'user_ZhvZUKGZZzrYmxdMGMR0L'
                                                            )
                                                            this.resetForm();
                                                            setTimeout(() => {
                                                                toaster.success("Successfully sent message! Redirecting you...");
                                                            },1257);
                                                            setTimeout(() => {
                                                                window.location = "/";
                                                            }, 3200)
                                                        }}>
                                                            <Text p className="pre-bold pre-13">Send Message</Text>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Section>
                </div>
            </div>
        )
    }
}

export default Contact;