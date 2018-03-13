/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it(' has a URL for each feed', function() {
           allFeeds.forEach(feed => {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).toBeGreaterThan(0);
           });
         });

         it(' has a name for each feed', function() {
           allFeeds.forEach(feed => {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).toBeGreaterThan(0);
           });
         });
    });


     describe('The Menu', function() {
         it('is hidden when page loads', function() {
            expect(document.body.classList).toContain('menu-hidden');
        });

          it('toggles when clicked', function() {
            $('.menu-icon-link').click();
            expect(document.body.classList).not.toContain('menu-hidden');
            $('.menu-icon-link').click();
            expect(document.body.classList).toContain('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });

         it('feed has at least 1 entries', function() {
           var contents = document.querySelectorAll('.feed .entry').length;
           expect(contents).toBeGreaterThan(0);
         });
       });

    describe('New Feed Selection', function() {
      var initalFeed;
      var newFeed;
      beforeEach(function(done) {
        loadFeed(0, function() {
          initalFeed = $('.feed').html();
        });
        loadFeed(1, function() {
          newFeed = $('.feed').html();
          done();
        });
      });

      it('changes feed content when new feed is selected', function() {
        expect(initalFeed).toBeDefined();
        expect(newFeed).toBeDefined();
        expect(newFeed).not.toBe(initalFeed);
      });
    });
}());
