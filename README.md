# gulp_structure_shared_by_small_projects
---
This is a gulp structure thought by PAMPANG. I am determined to figure out a better way to use gulp among small projects. By now, gulp can be used ad a big project which is constituted by small projects.

In the project, you can run gulp tasks like:

1. gulp ejs --> 编译ejs为html
1. gulp sass --> 编译sass为css
1. gulp js --> 编译js，检测语法错误
1. gulp move --> 迁移不需做处理的项目，从src到dist
1. gulp png --> 压缩png
1. gulp watch --> 创建监听器，监听当前目录下的改动
1. gulp build --> 执行ejs、sass、js、png、move任务。
1. gulp default --> 执行build、wacth任务。 
1. gulp cpfont -f [your font name] --> 从util_font/文件夹中将需要用到的字体复制过来
1. gulp cptpl -s [tpl name] -d [your project name]  --> 从util_tpl/文件夹中将指定的初始化模板复制到app中，并改为你指定的名字
1. gulp font [-s htmlFileName -s htmlFileName -s htmlFileName ... ] --> 根据html内容压缩字体。默认是遍历所有HTML文件，亦可指定某一个或多个HTMl文件。