import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { IoMdSend } from "react-icons/io";

function MyForm() {
    const [state, handleSubmit, reset] = useForm('xknaordq');

    // if (state.submitting) {
    //     return <p>Submitting…</p>;
    // }

    if (state.succeeded) {
        return (
            <div className="container my-5">
                <div className="alert alert-dark bg-black text-orange text-center p-4" id='resend-message-div' role="alert">
                    <h5 className="mb-3 fw-semibold">Message sent!</h5>
                    <p className="mb-4">I will get back to you soon.</p>
                    <button
                    className="btn submit-btn text-orange fw-semibold px-4"
                    onClick={reset}
                    >
                    Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                    Your Name
                </label>
                <input
                    id='name'
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email ID"
                    className="form-control"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your Message"
                    className="form-control"
                    rows="5"
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="submit-btn mt-2 btn text-orange d-inline-flex justify-content-center align-items-center gap-2 fw-semibold"
                    style={{ width: "150px" }}
                    disabled={state.submitting}
                >
                    Send
                    <IoMdSend />
                </button>
            </div>
        </form>
    );
}

export default MyForm;
