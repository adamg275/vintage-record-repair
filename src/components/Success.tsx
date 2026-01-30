fuimport './Success.css';

function Success() {
    return (
        <div className="success-page">
            <div className="success-content">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 12 15 16 10" />
                </svg>
                <h1>Thank You!</h1>
                <p>Your enquiry has been sent successfully. I'll get back to you within 24 hours.</p>
                <a href="/" className="btn btn-primary">Back to Home</a>
            </div>
        </div>
    );
}

export default Success;