<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	console.log(123);
	console.log(哈哈哈);
	console.log(34555);
	console.log("你好啊");
	
</script>

<style lang="scss">
	// 设置整个项目的背景色
	page {
		background-color: white;
		padding: 10px;
		box-sizing: border-box;
	}
</style>
