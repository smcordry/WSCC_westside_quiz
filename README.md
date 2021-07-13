
# Hey Dad, read me!

I applied a somewhat goofy theme to the webpage so you could easily see what the template (called [Sketchy](https://bootswatch.com/sketchy/)) affects. If you find the font to be a bit more insane than cute, checkout the website I usually grab templates from called [Bootswatch](www.bootswatch.com) for a more desirable one.

## How to apply a new template/theme

Once you find one you like, click the Download button and select the first option: `bootstrap.min.css`. No need to open the file - it's a little scary in there. In the [resources folder](https://github.com/smcordry/WSCC_westside_quiz/tree/main/resources) you'll find a file with the same name, so all you need to do is replace it. That's not as easy as it sounds on GitHub, so I'd suggest deleting the pre-existing one, and then uploading the new one you picked out.
>### How to delete?
>Similar to how we renamed the `index.html` file, click on the `bootstrap.min.css` file and there should be a little trashcan in the top right. It'll ask you to Commit the changes. Do it! No need to change any of the options.
>### How to upload?
>Back in the [resources folder](https://github.com/smcordry/WSCC_westside_quiz/tree/main/resources) there's a button to **Add file > Upload files**, exactly like what you might expect.

## Neat-o!!
### But...everything still looks "squished" and I want to do more formatting
Call me :) Obviously you're welcome to tackle this on your own, but reading the docs can make things seem much more complicated than they need to be for this. Half an hour on Zoom will get you up and running a lot faster if you'd like to do it yourself, or I would be so happy to mess with it on your behalf if you let me know how it should look!

The squished-ness will require some simple, but tedious HTML reformatting. Bascially, Bootstrap uses a [grid of 12 columns](https://getbootstrap.com/docs/5.0/layout/grid/) (and infinite rows) to format the page. Since this is old code, we need to migrate it into this new format. Not a huge deal if you've done it before - will require lots of reading if you haven't.

The formatting also takes some getting used to, and it's easiest if you work with what the template has in it. I use the template [preview page](https://bootswatch.com/sketchy/) in conjunction with the Chrome Inspect tool (what we used to view those errors) to see what classes have the formatting I'm looking for.

