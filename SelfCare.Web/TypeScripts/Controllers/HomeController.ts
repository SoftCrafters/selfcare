﻿module care.Controllers {
    'use strict';

    export class HomeCtrl extends BaseController{
        private $scope;
        private $window;
        private $location;
        private categorySvc: Services.ICategoryService;
        static $inject = ['$scope', '$location', '$window','categoryService'];

        private init(): void {
            var self = this;
            self.$scope.$root.title = 'SelfCare Portal | Home';

            self.$scope.$on('$viewContentLoaded', () => {
                this.$window.ga('send', 'pageview', { 'page': this.$location.path(), 'title': this.$scope.$root.title });
            });

            self.categorySvc.loadCategories().then(
                function(data) {
                    self.$scope.categories = data;
                },
                function(response) {
                });
        }

        constructor($scope: IBaseScope, $location, $window, categoryService) {
            super($scope);
            this.$scope = $scope;
            this.$window = $window;
            this.$location = $location;
            this.categorySvc = categoryService;

            this.init();
        }
    }
}