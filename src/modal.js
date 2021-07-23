import React, { Component } from "react";
import { Modal, Button, ToggleButton } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: this.props.mail,
            show: this.props.show,
            data:
            {
                "Friends & Family": this.props.values[0],
                "Relationships": this.props.values[1],
                "Wealth": this.props.values[2],
                "Personal Growth": this.props.values[3],
                "Health": this.props.values[4],
                "Fun & Recreation": this.props.values[5],
                "Possesion": this.props.values[6],
                "Career": this.props.values[7]
            }
        }
        this.mailInput = React.createRef();
    }

    sendFinalReport(e) {
        e.preventDefault();
    }

    showThank = () => {
        toast.success('E-mail successfully send', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    sendEmail = () => {
        let { mail, data } = this.state;
        mail = this.mailInput.current.value;
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (re.test(mail)) {
            this.setState({ mail });
            let { show } = this.state;
            this.setState({ show: false });
            this.showThank()
            emailjs.init('user_AT5nORStcFhAPLlCR9Xy2');
            var templateParams = {
                reply_to: mail,
                reportData: this.createTemplate()
            };
            console.log(templateParams);
            emailjs.send('default_service', 'template_jblhwao', templateParams)
                .then((mail) => {
                    console.log(mail);

                }, (error) => {
                    console.log(error.text);
                });
        }
        else {
            alert("Please provide valid email address");
        }
    }

    createTemplate = () => {
        return `<html>
                <body>
                    <h1>This is your Wheel Of Life</h1>
                    <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 30%;">
                        <tr>
                            <th style="border: 1px solid #dddddd;  text-align: left; padding: 8px;">Area</th>
                            <th style="border: 1px solid #dddddd;  text-align: left; padding: 8px;">Rating</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Friends & Family</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[0] + `</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Relationships</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[1] + `</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Wealth</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[2] + `</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Personal Growth</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[3] + `</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Health</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[4] + `</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Fun & Recreation</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[5] + `</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Possesion</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[6] + `</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Career</td>
                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">`+ this.props.values[7] + `</td>
                        </tr>
                    </table>
                </body>
            </html>`;
    }

    close = () => {
        let { show } = this.state;
        this.setState({ show: false });

    }
    render() {
        return (
            <>
                {this.state.show ?
                    <div className="modal">

                        <Modal id="mailModal" show={this.props.show} >
                            <Modal.Header>
                                <Button onClick={this.close} className="closeBtn">
                                    x
                                </Button>

                                <Modal.Title id="contained-modal-title-vcenter">
                                    Send Email
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Give your mail below so that we can send you a copy of your WHEEL OF LIFE</p>
                                <input type="email" id="phone" placeholder="abc@gmail.com" ref={this.mailInput} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" id="off" onClick={this.sendEmail}>
                                    Send
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </div>
                    : null}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </>
        );
    }
}

export default Email;