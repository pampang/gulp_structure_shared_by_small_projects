var path = require('path');

// https://segmentfault.com/q/1010000002763411
// 如果我们使用了“./”来引导路径，会导致gulp无法监听新建的文件。
// 因此取消使用“./”路径。

module.exports = {
	ejs: {
		src: 'src/[^_]*.ejs',   // [^_],过滤掉以下划线“_”开头的文件。
		dest: 'dist',
		watch: [ 'src/**/*.ejs', 'src/data/**' ],
		setting: {

		}
	},
	sass: {
		src: 'src/sass/*.scss',
		dest: 'dist/css',
		watch: 'src/sass/**/*.scss',
		setting: {
			sass: 'src/sass',    // sass存放位置
			css: 'dist/css',    // css存放位置
			image: 'src/images'  // 图片存放位置
		}
	},
	autoprefixer: {
		setting: {
			browsers: [
				'last 2 versions',
				'safari 5',
				'ie 8',
				'ie 9',
				'opera 12.1',
				'ios 6',
				'android 4'
			],   // 设置要适配的浏览器前缀
			remove: false   // 是否删除无用的前缀，默认为true。
		}
	},
	js: {
		src: 'src/js/[^_]*.js',      // [^_],过滤掉以下划线“_”开头的文件。
		dest: 'dist/js',
		watch: 'src/js/**/*.js',
		setting: {

		}
	},
	png: {
		src: 'src/images/[^_]**.png',
		dest: 'dist/images',
		setting: {
			
		}
	},
	imageminPngquant: {
		setting: {
			quality: '65-80',      	// 压缩质量
			speed: 4				// 压缩速度
		}
	},
	jpg: {
		src: 'src/images/[^_]**.jp?(e)g',
		dest: 'dist/images',
		setting: {
			interlaced: true
		}
	},
	// imageminJpegtran: {
	// 	setting: {
	// 		progressive: true
	// 	}
	// },
	imageminMozjpeg: {
		setting: {
			quality: 80
		}
	},
	gif: {
		src: 'src/images/[^_]**.gif',
		dest: 'dist/images',
		setting: {

		}
	},
	imageminGifsicle: {
		setting: {
			interlaced: true
		}
	},
	svg: {
		src: 'src/images/[^_]**.svg',
		dest: 'dist/images',
		setting: {

		}
	},
	imageminSvgo: {
		setting: {

		}
	},
	clean: {
		src: [ 'dist/**' , 'src/.sass-cache'],   // 需要清除的文件夹
		setting: {

		}
	},
	browserSync: {
		setting: {
			files: [ '../**/dist/**', '../debug/**' ],
			server: {
				baseDir: '../'
			},
			open: false   // 取消自动打开浏览器
		}
	},
	font: {
		src: 'dist/font/*.ttf',
		dest: 'dist/font'
	},
	cpfont: {
		src: "../../util_font",
		dest: "./src/font"
	},
	// server: {      // 只实现对4399/目录构建服务器，并对其下的所有改动做全局刷新。
	// 	setting: {
	// 		files: '../**',
	// 		server: {
	// 			baseDir: '../'
	// 		},
	// 		open: false   // 取消自动打开浏览器
	// 	}
	// },
	move: {
		lib: {
			src: 'src/lib/**',
			dest: 'dist/lib'
		},
		font: {
			src: 'src/font/**',
			dest: 'dist/font'
		},
		swf: {
			src: 'src/swf/**',
			dest: 'dist/swf'
		},
		media: {
			src: 'src/media/**',
			dest: 'dist/media'
		}
	}
};