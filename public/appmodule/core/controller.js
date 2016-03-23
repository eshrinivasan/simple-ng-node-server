demoapp.controller('DemoController', function( $scope, $window, $state )
	{
		$scope.transition = 'slide-left';
		$scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
		$scope.currentIndex = -1;
		$scope.maxIndex = $scope.tabs.length;
		$scope.left = false;

		next();

		function next()
		{
			$scope.currentIndex = $scope.currentIndex+1 < $scope.maxIndex ? $scope.currentIndex+1 : 0;
			var name = $scope.tabs[$scope.currentIndex];
			$state.go( name );
		}

		$scope.left = function()
		{
			$scope.transition = 'slide-left';
			next();
		}

		$scope.right = function()
		{
			$scope.transition = 'slide-right';
			next();
		}

		$scope.top = function()
		{
			$scope.transition = 'slide-top';
			next();
		}

		$scope.bottom = function()
		{
			$scope.transition = 'slide-bottom';
			next();
		}
});