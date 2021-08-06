var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Trang cá nhân";
	$scope.updateInfo = "Ông hoàng Coder";
	$scope.verify = "Verify";
	$scope.des = "Chiến binh FIX BUG";
	$scope.cv = "Công việc";
	$scope.job1 = "Dịch vụ Facebook";
	$scope.job2 = "Code dạo";
	$scope.contact = "Giới thiệu";
	$scope.contact1 = "19-01-2001";
	$scope.contact2 = "Độc thân";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Nếu có thắc mắc về code thì liên lạc mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "Instagram";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.modal6 = "Phone";
	$scope.modal7 = "Gapo";
	$scope.modal8 = "Tiktok";
	$scope.linkfb = "https://www.facebook.com/trunghai.info";
	$scope.linkzl = "http://zalo.me/0398810162";
	$scope.linksc = "https://www.instagram.com/trunghai.info/";
	$scope.linkgm = "mailto:hatrunghai19@gmail.com";
	$scope.linktiktok = "https://www.tiktok.com/@trunghai1901";
	$scope.linkgapo = "https://www.gapo.vn/trunghai.info";
	$scope.linkphone = "tel:0398810162";
	$scope.smsphone = "sms:0398810162";
	$scope.email = "mailto:hatrunghai19@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "KO là biệt danh đầu tiên. Khi còn là cậu học sinh lớp 10 ngu ngơ, mình đã được tiếp xúc với máy tính. Người đã thay đổi cuộc đời mình theo chiều hướng tích cực hơn. Biến mình từ thằng mọt sách không biết sử dụng máy tính trở thành một lập trình viên như hôm nay. Được tự hào kể lại câu chuyện và tự hào vì là một thành viên chân thành tại AnonyViet. Mình thực sự rất hạnh phúc khi học tập và làm việc tại đây.";
	$scope.contentStory2 = "Trong suốt hai năm qua, tôi cảm thấy mình chưa có tiến bộ nhiều trong công việc lẫn học tập. Cảm thấy mình cần bổ sung nhiều kiến thức hơn, có trách nhiệm hơn trong công việc và lời hứa. Gần đây, website đã bước sang giai đoạn phát triển, member trông đợi khá nhiều từ tôi và các Admin khác. Cho nên tôi sẽ cố gắng nhiều hơn nữa để mọi người không thất vọng. Xin cảm ơn mọi người !";
	$scope.storytitle1 = "Đời lập trình của tôi bắt đầu bằng sự tình cờ ...";
	$scope.storytitle2 = "Lời hứa của tôi với bản thân và mọi người trong hai năm qua ...";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "KO";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});
