import React from 'react';
import BannerIMG from '../img/challengerFrame.png';
import * as emailjs from 'emailjs-com';

// GEIST
import { Image, Spacer, Text, Input, Description, Divider, Textarea, Button } from '@geist-ui/react';

// BULMA
import { Container, Section } from 'react-bulma-components';

// EVERGREEN
import { TextInputField, toaster, Alert } from 'evergreen-ui';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', subject: '', message: '' };
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    resetForm() { this.setState({ name: '', email: '', subject: '', message: '', }); }
    handleChange(event) { this.setState({ [event.target.name]: event.target.value }); }

    render() {
        // eslint-disable-next-line
        const { name, email, subject, message, sentMessage } = this.state;
        return (
            <div style={{ position: 'relative', width: '100%', marginBottom: '300px' }}>
                <div style={{ position: 'relative' }}>
                    <Image style={{ height: "auto", maxHeight: '400px', width: '100%', objectFit: 'cover', filter: 'invert(0.4)' }} className="sc-banner" src={BannerIMG} />
                </div>
                <div style={{ position: "absolute", top: '0', left: '0', width: '100%', height: '100%' }}>
                    <Section style={{ height: '100%' }}>
                        <Container style={{ height: '100%' }}>
                            <Spacer h={0.5} />
                            <Text h1 className="big-text pre-white">Contact Solar Hawks</Text>
                            <Spacer h={2} />
                            <div className="columns">
                                <div className="column is-half">
                                    <div className="pre-card pre-bigshadow">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="pre-padding-std">
                                                <div className="columns">
                                                    <div className="column is-half">
                                                        <Input required width="100%" type="secondary" value={name}>
                                                            <Description title="Your Name *" />
                                                        </Input>
                                                    </div>
                                                    <div className="column is-half">
                                                        <Input required width="100%" type="secondary" value={email}>
                                                            <Description title="Your Email *" />
                                                        </Input>
                                                    </div>
                                                </div>
                                                <Spacer h={0.5} />
                                                <Divider />
                                                <Spacer h={0.5} />
                                                <Input required width="100%" type="secondary" value={subject}>
                                                    <Description title="Message Subject(s) *" />
                                                </Input>
                                                <Spacer h={1} />
                                                <Divider />
                                                <Spacer h={0.5} />
                                                <Description title="Your Message *" />
                                                <Textarea required rows={4} width="100%" type="secondary" value={message}></Textarea>
                                            </div>
                                            <div className="contact-footer">
                                                <div className="columns">
                                                    <div className="column is-three-fifths">
                                                        <Text p className="pre-white pre-wnorm pre-nomar">You can also contact directly at
                                                            <a href="mailto:support@solarhawks.org" className="pre-white pre-bold"> support@solarhawks.org</a>
                                                        </Text>
                                                    </div>
                                                    <div className="column is-two-fifths" type="submit">
                                                        <Button scale={1} type="success" ghost className="pre-bold" id="contact-btn" style={{ marginTop: '0px' }} onClick={() => {
                                                            toaster.notify("Sending message...");
                                                            const { name, email, subject, message } = this.state;
                                                            const templateParams = { name: name, email: email, subject, message, ip: window.ip || "Unidentifiable" };
                                                            emailjs.send(
                                                                'service_biw49qg',
                                                                'template_c52icuu',
                                                                templateParams,
                                                                'user_ZhvZUKGZZzrYmxdMGMR0L'
                                                            )
                                                            this.resetForm();
                                                            setTimeout(() => {
                                                                toaster.success("Successfully sent message! Redirecting you...");
                                                            }, 1257);
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
                <Spacer h={25} className="is-hidden-desktop" />
            </div>
        )
    }
}

export default Contact;