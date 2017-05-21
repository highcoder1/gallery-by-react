require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片路径的方式
// let yeomanImage = require('../images/yeoman.png');

//获取图片信息
let imageDatas = require('../data/imageDatas.json');

//根据图片名获取图片的路径
imageDatas = (function(imageArr){
	for(let i=0,j=imageArr.length;i<j;i++){
		let singleImage = imageArr[i];
		//获取图片路径的方法（通过require便可获取到）
		singleImage.imageUrl = require('../images/' + singleImage.fileName);
		imageArr[i] = singleImage;
	}
})(imageDatas);



class AppComponent extends React.Component {
  render() {
    return (
    	<section className="stage">
	      <section className="img-sec">
	      {imageDatas}
	      </section>
	      <nav className="controller-nav">
	      </nav>
      	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
