function Footer(){
    return(<>
        <footer className="text-center container-fluid" style={{paddingTop:'0.5in', backgroundColor:'lightgrey'}}>
    <div>
        <h3>Follow me</h3>
        <div className="d-flex flex-row justify-content-center">
            <a href="https://twitter.com/WYabesi46776"><i class="display-5 bi-messenger p-2"></i></a>
            <a href="https://twitter.com/WYabesi46776"><i class="display-5 bi-twitter-x p-2"></i></a>
            <a href="https://www.instagram.com/witinyayabesi/"><i class="display-5 bi-instagram p-2"></i></a>
            
        </div>
    </div>
    <div style={{paddingTop:'0.25in'}}>
        <h3>Copyright</h3>
        <p id="copyright">© 2023 Yabesi Witinya. All rights reserved.</p>
    </div>
  </footer>
    </>);
}
export default Footer;