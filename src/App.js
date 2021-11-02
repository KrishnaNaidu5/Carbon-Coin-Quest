import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {

    return (
      <div className="App">
     <div className="preloader"><div className="spinner" /></div>
        <header className="header header-home-one">
          <nav className="navbar navbar-default header-navigation stricky">
            <div className="thm-container clearfix">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed bitmex-icon-menu" data-toggle="collapse" data-target=".main-navigation" aria-expanded="false"> </button>
                <a className="navbar-brand" href="index.html">
                  <img src="img/logo.png" style={{height: '85px'}} />
                </a>
              </div>
              <div className="collapse navbar-collapse main-navigation mainmenu " id="main-nav-bar">
                <ul className="nav navbar-nav navigation-box navbar-right">
                  <li><a className="active" href="#">Home</a></li>
                  <li><a href="#about">About</a> </li>
                  <li><a href="#news">News</a> </li>
                  <li><a href="#Calculator">Calculator</a> </li>
                  <li> <a href="#how-it-works">How It Works</a> </li>
                  <li><a href="#our-experts">Our Experts</a></li>
                  <li> <a href="#contact-us">Contact Us</a> </li>
                </ul>                
              </div>
            </div>
          </nav>   
        </header>
        <div id="minimal-bootstrap-carousel" className="carousel slide carousel-fade slider-home-one" data-ride="carousel">
          <div id="particles-js" />          
          <div className="carousel-inner" role="listbox">
            <div className="item active slide-1" style={{backgroundImage: 'url(img/banner-1-1-1.png)', backgroundPosition: 'right bottom'}}>
              <div className="carousel-caption">
                <div className="thm-container">
                  <div className="box valign-middle">
                    <div className="content ">
                      <h3 data-animation="animated fadeInUp">Earn With Imperial Dollar (IDLL)</h3>
                      <p data-animation="animated fadeInDown">You can earn more with this crypto coin of Carbon Coin as it provides investors with a huge chance to buy/bid.</p>
                      <a href="#" className="thm-btn" data-animation="animated fadeInDown">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>                
            </div>
            <div className="item slide-2" style={{backgroundImage: 'url(img/banner-1-1-2.png)', backgroundPosition: 'right center'}}>
              <div className="carousel-caption">
                <div className="thm-container">
                  <div className="box valign-middle">
                    <div className="content ">
                      <h3 data-animation="animated fadeInUp">Coins Are Safe In Your Wallet </h3>
                      <p data-animation="animated fadeInDown">With the use of advanced blockchain technology, the coins offered by Carbon Coin will be kept safely in your wallet.</p>
                      <a href="#" className="thm-btn" data-animation="animated fadeInDown">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>                
            </div>
            <div className="item slide-3" style={{backgroundImage: 'url(img/banner-1-1-1.png)', backgroundPosition: 'right bottom'}}>
              <div className="carousel-caption">
                <div className="thm-container">
                  <div className="box valign-middle">
                    <div className="content ">
                      <h3 data-animation="animated fadeInUp">Coin Ownership</h3>
                      <p data-animation="animated fadeInDown">Join the crypto-world with Carbon Coin ICO. Get the ownership of IDLL coins to buy, bid &amp; trade.</p>
                      <a href="#" className="thm-btn" data-animation="animated fadeInDown">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>                
            </div>
            <div className="item slide-4" style={{backgroundImage: 'url(img/banner-1-1-2.png)', backgroundPosition: 'right center'}}>
              <div className="carousel-caption">
                <div className="thm-container">
                  <div className="box valign-middle">
                    <div className="content ">
                      <h3 data-animation="animated fadeInUp">Download A Wallet</h3>
                      <p data-animation="animated fadeInDown">Manage your cryptocurrency with an easy-to-use wallet. Start earning with Imperial Dollar by downloading a crypto wallet. </p>
                      <a href="#" className="thm-btn" data-animation="animated fadeInDown">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>                
            </div>
            <div className="item slide-3" style={{backgroundImage: 'url(img/banner-1-1-1.png)', backgroundPosition: 'right bottom'}}>
              <div className="carousel-caption">
                <div className="thm-container">
                  <div className="box valign-middle">
                    <div className="content ">
                      <h3 data-animation="animated fadeInUp">Use Imperial Dollar</h3>
                      <p data-animation="animated fadeInDown">After earning coins, you can use your coin ownership for trading, buying, selling, or exchanging with others.</p>
                      <a href="#" className="thm-btn" data-animation="animated fadeInDown">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>                
            </div>
          </div>
          <a className="left carousel-control" href="#minimal-bootstrap-carousel" role="button" data-slide="prev">
            <i className="fa fa-angle-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#minimal-bootstrap-carousel" role="button" data-slide="next">
            <i className="fa fa-angle-right" />
            <span className="sr-only">Next</span>
          </a>
          <ul className="carousel-indicators list-inline custom-navigation">
            <li data-target="#minimal-bootstrap-carousel" data-slide-to={0} className="active" />
            <li data-target="#minimal-bootstrap-carousel" data-slide-to={1} />
          </ul>
        </div>
        <section className="feature-style-one sec-pad text-center">
          <div className="thm-container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-feature-style-one">
                  <div className="icon-box">
                    <i className="bitmex-icon-businessman" />
                  </div>
                  <a href="#"><h3>Bitcoin Ownership</h3></a>
                  <p>Bitcoin is changing the way people <br /> think about money. Educate yourself <br /> about this ground-breaking <br /> payment system.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-feature-style-one">
                  <div className="icon-box">
                    <i className="bitmex-icon-wallet" />
                  </div>
                  <a href="#"><h3>Download A wallet</h3></a>
                  <p>Bitcoin is changing the way people <br /> think about money. Educate yourself <br /> about this ground-breaking <br /> payment system.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-feature-style-one">
                  <div className="icon-box">
                    <i className="bitmex-icon-data" />
                  </div>
                  <a href="#"><h3>Use Bitcoin</h3></a>
                  <p>Bitcoin is changing the way people <br /> think about money. Educate yourself <br /> about this ground-breaking <br /> payment system.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-style-one gray-bg sec-pad page-section" id="about">
          <div className="thm-container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-style-one-content">
                  <span>Learn about us</span>
                  <h3>About Carbon Coin</h3>
                  <p>Carbon Coin provides a leading open-source blockchain platform for innovation and performance. It is supported by a powerful community dedicated to creating and innovating on the blockchain platform. Our dedicated ICO project is Imperium for which the protocol token is Imperial Dollar (IDLL) or (IDL).</p>
                  <a href="#" className="thm-btn yellow-bg-hvr">Get Started</a>
                </div>
              </div>
              <div className="col-md-6">
                <img src="img/about-moc-1.png" alt="" className="moc-img" />
              </div>
            </div>
          </div>
        </section>
        <section className="fun-fact-style-one dark-bg sec-pad">
          <div className="thm-container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-fun-fact-style-one text-center">
                  <i className="bitmex-icon-coin" />
                  <p>Total Transactions</p>
                  <h3 className="counter">8980</h3>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-fun-fact-style-one text-center">
                  <i className="bitmex-icon-wallet" />
                  <p>Bitcoin Wallets</p>
                  <h3 className="counter">7540</h3>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-fun-fact-style-one text-center">
                  <i className="bitmex-icon-like" />
                  <p>Happy Users</p>
                  <h3 className="counter">9260</h3>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-fun-fact-style-one text-center">
                  <i className="bitmex-icon-handshake" />
                  <p>Bitcoin Investors</p>
                  <h3 className="counter">5721</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-pad blog-style-one page-section" id="news">
          <div className="thm-container">
            <div className="sec-title text-center">
              <span>updates from blog</span>
              <h3>Latest News</h3>
            </div>
            <div className="row masonary-layout">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="single-blog-style-one">
                  <div className="img-box">
                    <img src="img/blog-1-1.jpg" alt="Awesome Image" />
                    <a href="#" className="read-more">+</a>
                  </div>
                  <div className="text-box">
                    <div className="meta-info">
                      <a href="#"><i className="fa fa-user" /> by admin</a>
                      <a href="#"><i className="fa fa-comments" /> 3 Comments</a>
                    </div>
                    <a href="#"><h3>Calculating bitcoins <br /> mining profitability</h3></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="single-blog-style-one">
                  <div className="img-box">
                    <img src="img/blog-1-2.jpg" alt="Awesome Image" />
                    <a href="#" className="read-more">+</a>
                  </div>
                  <div className="text-box">
                    <div className="meta-info">
                      <a href="#"><i className="fa fa-user" /> by admin</a>
                      <a href="#"><i className="fa fa-comments" /> 3 Comments</a>
                    </div>
                    <a href="#"><h3>Learn what is bitcoin <br /> mining pool?</h3></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="single-blog-style-one">
                  <div className="img-box">
                    <img src="img/blog-1-3.jpg" alt="Awesome Image" />
                    <a href="#" className="read-more">+</a>
                  </div>
                  <div className="text-box">
                    <div className="meta-info">
                      <a href="#"><i className="fa fa-user" /> by admin</a>
                      <a href="#"><i className="fa fa-comments" /> 3 Comments</a>
                    </div>
                    <a href="#"><h3>How to get started with <br /> bitcoin</h3></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="single-blog-style-one">
                  <div className="img-box">
                    <img src="img/blog-1-4.jpg" alt="Awesome Image" />
                    <a href="#" className="read-more">+</a>
                  </div>
                  <div className="text-box">
                    <div className="meta-info">
                      <a href="#"><i className="fa fa-user" /> by admin</a>
                      <a href="#"><i className="fa fa-comments" /> 3 Comments</a>
                    </div>
                    <a href="#"><h3>Bitcoin whitepaper: A <br /> beginner’s guide</h3></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="btc-calculator sec-pad page-section" id="Calculator">
          <div className="thm-container">
            <div className="sec-title text-center black">
              <span>Bitcoin currency</span>
              <h3>Start Investing In Imperial Dollar</h3>
              <p>Consider your investments in Imperial Dollar (IDLL) to join the most amazing world of cryptocurrency and dig out the associated highest returns.</p>
            </div>
            <form action="#" className="btc-calc-form row">
              <div className="col-md-3">
                <input type="text" placeholder="enter amount" />
              </div>
              <div className="col-md-3">
                <select className="selectpicker">
                  <option value="#">Bitcoind ( BTC )</option>
                  <option value="#">Bitcoind ( BTC )</option>
                  <option value="#">Bitcoind ( BTC )</option>
                  <option value="#">Bitcoind ( BTC )</option>
                  <option value="#">Bitcoind ( BTC )</option>
                  <option value="#">Bitcoind ( BTC )</option>
                </select>
              </div>
              <div className="col-md-3">
                <input type="text" placeholder="enter amount" />
              </div>
              <div className="col-md-3">
                <select className="selectpicker">
                  <option value="#">US Dollars</option>
                  <option value="#">US Dollars</option>
                  <option value="#">US Dollars</option>
                  <option value="#">US Dollars</option>
                  <option value="#">US Dollars</option>
                  <option value="#">US Dollars</option>
                </select>
              </div>
            </form>
          </div>
        </section>
        <section className="how-it-works sec-pad page-section" id="how-it-works">
          <div className="thm-container">
            <div className="sec-title text-center">
              <span>check our process</span>
              <h3>How It Works</h3>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-how-it-works text-center">
                  <div className="icon-box">
                    <i className="bitmex-icon-wallet" />
                    <div className="count">01</div>
                  </div>
                  <h3>Choose Your Wallet</h3>
                  <p>Choose a wallet that is easy to use, reliable, fast, and secure. Also, decide whether you need an online or offline wallet.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-how-it-works text-center">
                  <div className="icon-box">
                    <i className="bitmex-icon-payment" />
                    <div className="count">02</div>
                  </div>
                  <h3>Make Payments</h3>
                  <p>Later choosing the wallet and adding coins to it, you will be able to send or receive payments.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-how-it-works text-center">
                  <div className="icon-box">
                    <i className="bitmex-icon-tap" />
                    <div className="count">03</div>
                  </div>
                  <h3>Start Buying &amp; Selling</h3>
                  <p>With the coins added to your wallet, you can buy, sell, trade, or bid on the cryptocurrency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-style-one sec-pad page-section" id="our-experts">
          <div className="thm-container">
            <div className="sec-title text-center">
              <span>meet our team</span>
              <h3>Bitcoin Experts</h3>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-team-style-one hvr-float-shadow">
                  <div className="img-box">
                    <img src="img/team-1-1.jpg" alt="Awesome Image" />
                  </div>
                  <div className="text-box text-center">
                    <h3>Kathern Dughi</h3>
                    <span>Director</span>
                    <p>Praesent dapibus iseleifend augu <br /> eget sollicitudin velit liqu lese.</p>
                    <div className="social">
                      <a href="#" className="fa fa-twitter" />
                      <a href="#" className="fa fa-facebook" />
                      <a href="#" className="fa fa-youtube-play" />
                      <a href="#" className="fa fa-pinterest" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-team-style-one hvr-float-shadow">
                  <div className="img-box">
                    <img src="img/team-1-2.jpg" alt="Awesome Image" />
                  </div>
                  <div className="text-box text-center">
                    <h3>Sau Merzlak</h3>
                    <span>Director</span>
                    <p>Praesent dapibus iseleifend augu <br /> eget sollicitudin velit liqu lese.</p>
                    <div className="social">
                      <a href="#" className="fa fa-twitter" />
                      <a href="#" className="fa fa-facebook" />
                      <a href="#" className="fa fa-youtube-play" />
                      <a href="#" className="fa fa-pinterest" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-team-style-one hvr-float-shadow">
                  <div className="img-box">
                    <img src="img/team-1-3.jpg" alt="Awesome Image" />
                  </div>
                  <div className="text-box text-center">
                    <h3>Corie Malkasian</h3>
                    <span>Director</span>
                    <p>Praesent dapibus iseleifend augu <br /> eget sollicitudin velit liqu lese.</p>
                    <div className="social">
                      <a href="#" className="fa fa-twitter" />
                      <a href="#" className="fa fa-facebook" />
                      <a href="#" className="fa fa-youtube-play" />
                      <a href="#" className="fa fa-pinterest" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-top page-section" id="contact-us">
          <div className="thm-container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="single-footer-top">
                  <p><i className="bitmex-icon-envelope" /><span>Email: </span>info@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="single-footer-top">
                  <p><i className="bitmex-icon-phone-call" /><span>Call: </span>123 456 789</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="single-footer-top">
                  <p><i className="bitmex-icon-placeholder" /><span>Address: </span>simply dummy text of the printing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <div className="thm-container">
            <div className="row masonary-layout">
              <div className="col-md-8 col-sm-8 col-xs-12 col-md-offset-2 col-sm-offset-2">
                <div className="single-footer-widget text-center">
                  <div className="title">
                    <h3>Subscribe</h3>
                  </div>
                  <form action="inc/mailchimp/subscribe.php" className="subscribe-form">
                    <input type="text" placeholder="Email Address" />
                    <button type="submit" className="fa fa-telegram" style={{fontSize: '20px'}} />
                  </form>
                  <ul className="links-list">
                    <li className="current"><a href="#">Home</a></li>
                    <li><a href="#about">About</a> </li>
                    <li><a href="#news">News</a> </li>
                    <li><a href="#Calculator">Calculator</a> </li>
                    <li> <a href="#how-it-works">How It Works</a> </li>
                    <li><a href="#our-experts">Our Experts</a></li>
                    <li> <a href="#contact-us">Contact Us</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-bottom">
          <div className="thm-container clearfix">
            <div className="pull-left copy-text">
              <p>© 2021 Carboncoin.com All copy rights are reserved.</p>
            </div>
            <div className="social pull-right">
              <a href="#" className="fa fa-twitter" />
              <a href="#" className="fa fa-facebook" />
              <a href="#" className="fa fa-youtube-play" />
              <a href="#" className="fa fa-pinterest" />
            </div>
          </div>
        </div>
        <section className="hidden-sidebar side-navigation">
          <a href="#" className="close-button side-navigation-close-btn fa fa-times" />
          <div className="sidebar-content">
            <div className="social">
              <a href="#" className="fa fa-twitter" />
              <a href="#" className="fa fa-facebook" />
              <a href="#" className="fa fa-youtube-play" />
              <a href="#" className="fa fa-pinterest" />
            </div>
          </div>
        </section>
        <div className="scroll-to-top scroll-to-target" data-target="html"><i className="fa fa-angle-up" /></div>
    </div>
  );
}
}

export default App;
