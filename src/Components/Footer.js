function Footer(){

    return(
        <section>
            <br/>
            <footer className="container-fluid text-center text-dark fixed-bottom" style={{backgroundColor: '#FFF0E7'}} >   
            <hr/>
            <div className="row">
                {/* <!--Paragraph--> */}
                <div className="col d-flex justify-content-center">
                    <p className="h5">
                        "A moment on the lips, a lifetime on the hips. Always eat what's right. If you want to run for long, avoid junk food...
                <br/> <br/>
                    Be Fit by Eating Fresh."
                </p> 
                </div>
                {/* <!--Icons--> */}
                <div className="col justify-content-center">
                    <div><p style={{fontSize: '18px', color: '#073418', paddingBottom:'15px'}} className="text-dark text-uppercase fw-bold">Follow us </p></div>
                    <p><a href="www.facebook.com"><i className="bi bi-facebook mx-4" style={{color:'#46223F'}}></i></a>
                    <a href="instagram.com"><i className="bi bi-instagram mx-4" style={{color:'#46223F'}}></i></a>
                    <a href="twitter.com"> <i className="bi bi-twitter mx-4" style={{color:'#46223F'}}></i></a></p>
                </div>
            </div>
            <br/>
                <h6 className="text-uppercase justify-content-center fw-bold p-2">
                    <p style={{color:'#073418'}}>  © 2023 Copyright</p>
                </h6>
            </footer>
        </section>
    )
}

export default Footer;
