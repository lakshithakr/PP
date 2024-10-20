
import "./Contact.css"
function Contact(){
  return (
    <div className='container contact-section' id='contact'>
        <div className='row'>
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                <div className='contact-form-image'>
                    <img src='https://st3.depositphotos.com/1518767/14768/i/450/depositphotos_147688917-stock-photo-contact-me-text-with-drawings.jpg' alt='Contact Picture'/>
                </div>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'> 
                <div className='contact-form-design'>
                    <div className='text-center'>
                        <h5>Contact Me</h5>
                    </div>
                    <form>
                        <div className='contact-form'>
                            <label classname='form-label'>Name</label>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='contact-form'>
                            <label classname='form-label'>Email</label>
                            <input type='email' className='form-control'/>
                        </div>
                        <div className='contact-form'>
                            <label classname='form-label'>Job Type</label>
                            <select className='custom-select-tag'>
                                <option>Full-Time</option>
                                <option>Working Student</option>
                                <option>Part Time</option>
                                <option>Contract</option>
                            </select>
                        </div>
                        <div className='contact-form'>
                            <label classname='form-label'>Message</label>
                            <textarea rows='6' type='text' className='form-control'/>
                        </div>
                        <div className='button-submit'>
                            <p>Send</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact