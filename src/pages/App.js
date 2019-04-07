import React, { Component } from 'react';
import './App.css';

// images from src/images/header
import logoUrl from '../images/header/logo.png';

// images from src/images/banner
import me2Url from '../images/banner/i2.jpg';
import javaUrl from '../images/banner/java.png';
import mysqlUrl from '../images/banner/mysql.png';
import reactUrl from '../images/banner/react.png';
import dirUrl from '../images/banner/dir.png';
import webUrl from '../images/banner/web.png';

// images from src/images/application
import imageviewUrl from '../images/application/imageview.png';
import bmapmarkerUrl from '../images/application/bmapmarker.png';
import cellUrl from '../images/application/cell.png';
import charts_pieUrl from '../images/application/charts_pie.png';
import definedcardUrl from '../images/application/definedcard.png';
import editorbtUrl from '../images/application/editorbt.png';
import indexedlistUrl from '../images/application/indexedlist.png';
import jplayerUrl from '../images/application/jplayer.png';
import login_formUrl from '../images/application/login_form.png';
import login_passwordUrl from '../images/application/login_password.png';
import pageUrl from '../images/application/page.png';
import reviewAreaUrl from '../images/application/reviewArea.png';
import scanUrl from '../images/application/scan.png';
import tableUrl from '../images/application/table.png';


// images from src/images/skill
import skillUrl from '../images/skill/SKILL.png';
import useUrl from '../images/skill/USE.png';
import laptopUrl from '../images/skill/laptop.png';



// images from src/images/contact
import helloUrl from '../images/contact/hello.png';
import mheadUrl from '../images/contact/mhead.png';
import phoneUrl from '../images/contact/frame-landscape.png';


const printInfo = ['避免', '争议', ',', '统一', '定义', '为', '能够', '使用', ',', '不敢说', '精通']

class App extends Component {

  state = {
    printText: "",
    printIndex: 0
  }

  componentDidMount() {
    this.intervalPrint = setInterval(() => this.handleAutoPrint(), 200);
    var canvas,
    ctx,
    width,
    height,
    size,
    lines,
    tick;

    function line() {
      this.path = [];
      this.speed = rand(10, 20);
      this.count = randInt(10, 30);
      this.x = width / 2;
      this.x +=1;
      this.y = height / 2 + 1;
      this.target = {
        x: width / 2,
        y: height / 2
      };
      this.dist = 0;
      this.angle = 0;
      this.hue = tick / 5;
      this.life = 1;
      this.updateAngle();
      this.updateDist();
    }
    line.prototype.step = function(i) {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
    
      this.updateDist();
    
      if (this.dist < this.speed) {
        this.x = this.target.x;
        this.y = this.target.y;
        this.changeTarget();
      }
    
      this.path.push({
        x: this.x,
        y: this.y
      });
      if (this.path.length > this.count) {
        this.path.shift();
      }
    
      this.life -= 0.001;
    
      if (this.life <= 0) {
        this.path = null;
        lines.splice(i, 1);
      }
    };
    
    line.prototype.updateDist = function() {
      var dx = this.target.x - this.x,
        dy = this.target.y - this.y;
      this.dist = Math.sqrt(dx * dx + dy * dy);
    }
    
    line.prototype.updateAngle = function() {
      var dx = this.target.x - this.x,
        dy = this.target.y - this.y;
      this.angle = Math.atan2(dy, dx);
    }
    
    line.prototype.changeTarget = function() {
      var randStart = randInt(0, 3);
      switch (randStart) {
        case 0: // up
          this.target.y = this.y - size;
          break;
        case 1: // right
          this.target.x = this.x + size;
          break;
        case 2: // down
          this.target.y = this.y + size;
          break;
        case 3: // left
          this.target.x = this.x - size;
          break;
        default:break;
      }
      this.updateAngle();
    };
    
    line.prototype.draw = function(i) {
      ctx.beginPath();
      var rando = rand(0, 10);
      for (var j = 0, length = this.path.length; j < length; j++) {
        ctx[(j === 0) ? 'moveTo' : 'lineTo'](this.path[j].x + rand(-rando, rando), this.path[j].y + rand(-rando, rando));
      }
      ctx.strokeStyle = 'hsla(' + rand(this.hue, this.hue + 30) + ', 80%, 55%, ' + (this.life / 3) + ')';
      ctx.lineWidth = rand(0.1, 2);
      ctx.stroke();
    };
    
    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    function randInt(min, max) {
      return Math.floor(min + Math.random() * (max - min + 1));
    };
    
    function init() {
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
      size = 30;
      lines = [];
      reset();
      loop();
    }
    
    function reset() {
      //width = Math.ceil(window.innerWidth / 2) * 2;
      //height = Math.ceil(window.innerHeight / 2) * 2;
      tick = 0;
      width = 160;
      height = 160;
    
      lines.length = 0;
      canvas.width = width;
      canvas.height = height;
    }
    
    function create() {
      if (tick % 10 === 0) {
        lines.push(new line());
      }
    }
    
    function step() {
      var i = lines.length;
      while (i--) {
        lines[i].step(i);
      }
    }
    
    function clear() {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'hsla(0, 0%, 0%, 0.1';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
    }
    
    function draw() {
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(tick * 0.001);
      var scale = 0.8 + Math.cos(tick * 0.02) * 0.2;
      ctx.scale(scale, scale);
      ctx.translate(-width / 2, -height / 2);
      var i = lines.length;
      while (i--) {
        lines[i].draw(i);
      }
      ctx.restore();
    }
    
    function loop() {
      requestAnimationFrame(loop);
      create();
      step();
      clear();
      draw();
      tick++;
    }

    init();
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
            <li><span><a href="https://www.jianghenghome.com">首页</a></span></li>
            <li><span><a href="#app">试试应用</a></span></li>
            <li><span><a href="#skill">技术栈</a></span></li>
            <li><span><a href="#contact">约？</a></span></li>
            <li><a className="button" href="https://www.jianghenghome.com/contorl">控制台</a></li>
          </ul>
          {/* <a href="https://www.jianghenghome.com/contorl">控制台</a> */}
        </header>

        <div className="j-banner" >
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
                <div><p>MY SKILL +</p> <p>了解我的技能</p> </div>
                <img src={dirUrl} alt="point" />
              </li>
            </ul>
          </div>
        </div>

        <div className="j-application" id="app">
          <div className="j-application-container">
            <div className="j-application-header">
              <h1>试试常规应用  /////////</h1>
              <h4>一个完整的Web应用往往涉及很多小功能</h4>
            </div>
            <div className="j-application-card">
              <ul>
                <li></li>
                <li className="j-a-c-box" ><div className="j-a-c-item"><div><img src={reviewAreaUrl} alt="reviewAreaUrl" /> <h4>短信</h4></div></div></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                <li><div className="j-a-c-item"><div><img src={imageviewUrl} alt="imageviewUrl" /> <h4>视频</h4></div></div></li>
                <li><canvas id="canvas"></canvas></li>
                <li><div className="j-a-c-item"><div><img src={charts_pieUrl} alt="charts_pieUrl" /> <h4>图表</h4></div></div></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                <li></li>
                <li><div className="j-a-c-item"><div><img src={bmapmarkerUrl} alt="" /> <h4>地图 </h4></div></div></li>
                <li><div className="j-a-c-item"><div><img src={editorbtUrl} alt="" /> <h4> 审核 </h4></div></div></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                <li></li>
                <li><div className="j-a-c-item"><div><img src={login_passwordUrl} alt="" /> <h4>权限</h4></div></div></li>
                <li><div className="j-a-c-item"><div><img src={pageUrl} alt="" /> <h4> 编辑</h4></div></div></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                <li></li>
                <li><div className="j-a-c-item"><div><img src={cellUrl} alt="" /> <h4> 文档</h4></div></div></li>
                <li><div className="j-a-c-item"><div><img src={tableUrl} alt="" /> <h4> 存储</h4></div></div></li>
                <li><div className="j-a-c-item"><div><img src={scanUrl} alt="" /> <h4> 扫码</h4></div></div></li>
                <li></li>
              </ul>
              <ul>
                <li></li>
                <li></li>
                <li><div className="j-a-c-item"><div><img src={jplayerUrl} alt="" /> <h4> 音频</h4></div></div></li>
                <li></li>
                <li><div className="j-a-c-item"><div><img src={indexedlistUrl} alt="" /> <h4>通信 </h4></div></div></li>
              </ul>
              <ul>
                <li></li>
                <li><div className="j-a-c-item"><div><img src={login_formUrl} alt="" /> <h4> 表单</h4></div></div></li>
                <li></li>
                <li><div className="j-a-c-item"><div><img src={definedcardUrl} alt="" /> <h4> Oauth</h4></div></div></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="j-application-background">
            <div className="j-application-bk-1">web</div>
            <div className="j-application-bk-2">
              <img src={webUrl} alt="background" />
            </div>
            <div className="j-application-bk-3"></div>
          </div>
        </div>

        <div className="j-skill" id="skill">

          <div className="j-skill-container">
            <div className="j-skill-content">
              <img src={laptopUrl} alt="laptop" />
              <div className="j-skill-content-main" >
                <h1>{this.state.printText} |</h1>
                <div className="j-s-c-m-item">
                  <h1>后端GET</h1>
                  <p>基础： Java特性、 Linux常用命令 <br />
                    框架： Springboot 全家桶 、Netty、Activiti<br />
                    数据： MySQL 、 Redis<br />
                    消息： Mqtt 、XMPP(tigase)<br />
                    部署： Docker、 Nginx/Tomcat<br />
                    敏捷： Jhipster
                      </p>
                </div>
                <div className="j-s-c-m-item">
                  <h1>前端GET</h1>
                  <p>
                    基础： HTML 、CSS 、JS<br />
                    框架： React 全家桶、 Axios  <br />
                    组件： AntDesign
                  </p>
                </div>
                <div className="j-s-c-m-item">
                  <h1>其他技能</h1>
                  <p>
                    能吃？ 工业机器人？<br />
                    硬件开发  Stm32、PCB Layout<br />
                    工业通信   Modbus、OPC ua 、LoRa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="j-s-b-block-1">
            <h1>用什么技能去实现？</h1>
          </div>
          <div className="j-s-b-block-2">
            <img src={useUrl} alt="" />
          </div>
          <div className="j-s-b-block-3">
            <img src={skillUrl} alt="" />
          </div>
        </div>

        <div className="j-footer">

          <div className="j-footer-container" id="contact">
            <div className="j-footer-container-main">
              <div className="j-f-c-m-phone" >
                <img src={phoneUrl} alt="contact" ></img>
              </div>
              <div className="j-f-c-m-text">
                <div>
                  <h1>约？</h1>
                  <img src={mheadUrl} alt="contact" ></img>
                  <p>邮箱 jiangheng666666@163.com</p>


                </div>

                <div className="j-footer-announce" >
                  <p>蜀ICP备19007494号-1</p>
                  <p>侵删 - - ！</p>
                  <p>默认不保留版权<br />
                    本站中的元素看得上的拿走</p>
                </div>
              </div>
            </div>
          </div>

          <div className="j-footer-back-1"></div>
          <div className="j-footer-back-2">
            <img src={helloUrl} alt="helloUrl" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
