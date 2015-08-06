
'use strict';

var app = angular.module("myApp");

app.controller("reviewsController", function($scope, $firebaseObject, $firebaseArray) {


	var firebaseRoot = 'https://adrianabasicfirstapp.firebaseio.com/comments';
			var ref = new Firebase(firebaseRoot);
			var chats = $firebaseArray(ref);

			$scope.chats = chats;

			$scope.sendChat = function(username, newChatText) {
					chats.$add({
						username: username,
						text: newChatText
					});
				};
});
