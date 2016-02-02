var gulp = require('gulp');		// https://www.npmjs.com/package/gulp
var helpText = [
	'1.  gulp ejs 			--> 编译ejs为html',
	'2.  gulp sass 			--> 编译sass为css',
	'3.  gulp js 			--> 编译js，检测语法错误',
	'4.  gulp move			--> 迁移不需做处理的项目，从src到dist',
	'5.  gulp png 			--> 压缩png',
	'6.  gulp watch			--> 创建监听器，监听当前目录下的改动',
	'7.  gulp build			--> 执行ejs、sass、js、png、move任务。',
	'8.  gulp default		--> 执行build、wacth任务。',
	'9.  gulp cpfont -f [your font name] --> 从util_font/文件夹中将需要用到的字体复制过来',
	'10. gulp cptpl -s [tpl name] -d [your project name] --> 从util_tpl/文件夹中将指定的初始化模板复制到app中，并改为你指定的名字',
	'11. gulp font [-s htmlFileName -s htmlFileName -s htmlFileName ... ] --> 根据html内容压缩字体。默认是遍历所有HTML文件，亦可指定某一个或多个HTMl文件。'
];

gulp.task('help', function () {
	console.log('在项目内，您可以输入：');
	for(var i=0, len=helpText.length; i<len; i++){
		console.log(helpText[i]);
	}
});