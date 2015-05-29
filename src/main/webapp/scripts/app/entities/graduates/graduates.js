'use strict';

angular.module('jwebplatformApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('graduates', {
                parent: 'entity',
                url: '/graduates',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'jwebplatformApp.graduates.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/graduates/graduatess.html',
                        controller: 'GraduatesController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('graduates');
                        return $translate.refresh();
                    }]
                }
            })
            .state('graduatesDetail', {
                parent: 'entity',
                url: '/graduates/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'jwebplatformApp.graduates.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/graduates/graduates-detail.html',
                        controller: 'GraduatesDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('graduates');
                        return $translate.refresh();
                    }]
                }
            });
    });
