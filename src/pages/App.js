import React, { Component } from 'react';
import './App.css';

// images from src/images/header
import logoUrl from '../images/header/logo.png';

// images from src/images/banner
import meUrl from '../images/banner/i.png';
import me2Url from '../images/banner/i2.jpg';
import javaUrl from '../images/banner/java.png';
import mysqlUrl from '../images/banner/mysql.png';
import reactUrl from '../images/banner/react.png';
import dirUrl from '../images/banner/dir.png';
import webUrl from '../images/banner/web.png';

// images from src/images/applicaiton
import imageviewUrl from '../images/applicaiton/imageview.png';
import bmapmarkerUrl from '../images/applicaiton/bmapmarker.png';
import cellUrl from '../images/applicaiton/cell.png';
import charts_pieUrl from '../images/applicaiton/charts_pie.png';
import definedcardUrl from '../images/applicaiton/definedcard.png';
import editorbtUrl from '../images/applicaiton/editorbt.png';
import indexedlistUrl from '../images/applicaiton/indexedlist.png';
import jplayerUrl from '../images/applicaiton/jplayer.png';
import login_formUrl from '../images/applicaiton/login_form.png';
import login_passwordUrl from '../images/applicaiton/login_password.png';
import pageUrl from '../images/applicaiton/page.png';
import reviewAreaUrl from '../images/applicaiton/reviewArea.png';
import scanUrl from '../images/applicaiton/scan.png';
import tableUrl from '../images/applicaiton/table.png';


class App extends Component {

  state = {
    printText: "",
    printIndex: 0
  }

  componentDidMount() {
    this.intervalPrint = setInterval(() => this.handleAutoPrint(), 200);
  }

  componentWillUnmount() {
    clearInterval(this.intervalPrint);
  }

  handleAutoPrint = () => {
    if (this.state.printIndex < 11) {
      this.setState({
        printText: this.state.printText + printInfo[this.state.printIndex],
        printIndex: this.state.printIndex + 1
      });
      console.log(this.state.printIndex);
    } else {
      if (this.state.printIndex < 20) {
        this.setState({
          printIndex: this.state.printIndex + 1
        });
      } else {
        this.setState({
          printText: "",
          printIndex: 0
        });
      }
    }
  }


  render() {
    return (
      <div className="App">

        <header className="j-header">
          <img src={logoUrl} alt="logo" />
          <ul>
            <li><span>首页</span></li>
            <li><span>试试应用</span></li>
            <li><span>技术栈</span></li>
            <li><span>约？</span></li>
          </ul>
          <a href="https://www.jianghenghome.com/contorl">控制台</a>
        </header>

        <div className="j-banner">
          <div className="j-banner-text">
            <div className="j-banner-text-container">
              <h1>TRY MORE+</h1>
              <h2>试试"新"技术</h2>
              <p>在制造业内摸爬滚打了几年，喊着工业4.0、智能制造2025的口号，做着数采软硬件开发的简单事儿。
                  感谢出差？有幸到各工厂观摩了家电、板材家具、汽车、通机等等产品的生产过程，见识了伟大的工业
                  回想起来，我画过硬件，写过软件，参与过招投标、出过技术协议......总而言之，接触得多，挺杂的
                  技术千千万，要勇敢的走出舒适圈去尝试新手段</p>
            </div>
          </div>
          <div className="j-banner-img">
            <img src={me2Url} alt="jiangheng" />
          </div>
          <div className="j-banner-skill">
            <ul>
              <li><img src={javaUrl} alt="skill java" /></li>
              <li><img src={reactUrl} alt="skill react" /></li>
              <li><img src={mysqlUrl} alt="skill mysql" /></li>
              <li>  
                  <div><p>SKILL</p> <p>了解我的技能</p> </div>
                  <img src={dirUrl} alt="point" />
              </li>
            </ul>
          </div>
        </div>
        <div className="j-application">
          <div className="j-application-container">
              <div className="j-application-header">
                <h1>试试常规应用  /////////</h1>
                <h4>一个完整的Web应用往往涉及很多小功能</h4>
              </div>
              <div className="j-application-card">
                <ul>
                  <li></li>
                  <li><div className="j-a-c-item"><img src={imageviewUrl} alt="" /> <h4></h4></div></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
          </div>
          <div className="j-application-background">
            <div className="j-application-bk-1">web</div>
            <div className="j-application-bk-2">
              <img src={webUrl} alt="background" />
            </div>
          </div>
        </div>
        <div className="j-skill"></div>
        <div className="j-footer"></div>
      </div>
    );
  }
}

export default App;
