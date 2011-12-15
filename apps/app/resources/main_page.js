// ==========================================================================
// Project:   App - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals App */

// This page describes the main user interface for your application.  
App.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: 'contentView'.w(),

    contentView: SC.View.extend({
      layout: {centerX: 0, width: 800, top: 50},

      childViews: 'buttonView slideView'.w(),

      buttonView: SC.ButtonView.extend({
        layout: {top: 0, width: 200, height: 24},
        title:  'Test',
        action: 'test'
      }),

      slideView: SC.View.extend({
        layout: {top: 40, width: 200, height: 100},
        backgroundColor: 'yellow',
        childViews: 'containerView'.w(),

        containerView: SC.View.extend({
          layout: {width: 400},
          backgroundColor: 'blue',
          childViews: 'leftView rightView'.w(),

          leftView: SC.View.extend({
            layout: {left: 0, width: 200},
            backgroundColor: 'red'
          }),

          rightView: SC.View.extend({
            layout: {left: 200, width: 200},
            backgroundColor: 'green'
          })
        })
      }),

      test: function() {
        this.getPath('slideView.containerView').animate(
          {left: -100},
          {duration: 1, timing: 'linear'}
        );
      }
    })
  })
});
