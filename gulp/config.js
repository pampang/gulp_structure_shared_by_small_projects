var path = require('path');

// https://segmentfault.com/q/1010000002763411
// 如果我们使用了“./”来引导路径，会导致gulp无法监听新建的文件。
// 因此取消使用“./”路径。

module.exports = {
	sass: {
		src: 'src/**/*.scss',
		dest: 'public/',
		watch: 'src/**/*.scss',
		setting: {
			// compass: true,
		}
	},
	autoprefixer: {
		setting: {
			browsers: [
				'last 10000 versions',
        'ios 6',
        'android 2.3',
        '>1%',
			],   // 设置要适配的浏览器前缀
			remove: false   // 是否删除无用的前缀，默认为true。
		}
	},
	js: {
		src: 'src/**/*.js',      // [^_],过滤掉以下划线“_”开头的文件。
		dest: 'public/',
		watch: 'src/**/*.js',
		setting: {

		}
	},
	png: {
		src: 'src/**/[^_]**.png',
		dest: 'public/',
		setting: {

		}
	},
	imageminPngquant: {
		setting: {
			quality: '35-80',      	// 压缩质量
			speed: 4				// 压缩速度
		}
	},
	jpg: {
		src: 'src/**/[^_]**.jp?(e)g',
		dest: 'public/',
		setting: {
			interlaced: true
		}
	},
	imageminMozjpeg: {
		setting: {
			quality: 80
		}
	},
	gif: {
		src: 'src/**/[^_]**.gif',
		dest: 'public/',
		setting: {

		}
	},
	imageminGifsicle: {
		setting: {
			interlaced: true
		}
	},
	svg: {
		src: 'src/**/[^_]**.svg',
		dest: 'public/',
		setting: {

		}
	},
	imageminSvgo: {
		setting: {

		}
	},
	clean: {
		src: [ 'public/**' , 'src/**/.sass-cache'],   // 需要清除的文件夹
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
	move: {
		html: {
			src: 'src/**/*.html',
			dest: 'public/',
			watch: 'src/**/*.html'
		},
		font: {
			src: 'src/**/font/**',
			dest: 'public',
			watch: 'src/**/font/**'
		},
		swf: {
			src: 'src/**/swf/**',
			dest: 'public',
			watch: 'src/**/swf/**'
		},
		media: {
			src: 'src/**/media/**',
			dest: 'public',
			watch: 'src/**/media/**'
		}
	}
};
