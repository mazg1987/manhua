const baseUrl = "https://www.kuaikanmanhua.com"

var count = 0;

export function requestGet(url, data) {
	count ++ ;
	if(count === 1){
		uni.showLoading({
			mask:true
		});
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: "GET",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			},
			complete:function(){
				count--;
				if(count===0){
					uni.hideLoading()
				}
			}
		})
	})
}

export function requestPost(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: "POST",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}
