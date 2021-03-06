var express = require('express'),
    router = express.Router({mergeParams: true}),
    Campground = require('../models/campground'),
    Comment = require('../models/comment');

// =============================
// COMMENTS ROUTES
// =============================

router.get('/new', isLoggedIn, function(req, res){
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            
        } else {
            res.render('comments/new', {campground: campground})
        }
    })
})

router.post('/', isLoggedIn, function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect('/campgrounds')
        } else {
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                    
                } else {
                    // add username and id to comment
                    // save comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                     //redirect campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            })
        }
    })
})

// comments edit route
router.get('/:comment_id/edit', checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect('back');
        } else {
            res.render('comments/edit', {campground_id: req.params.id, comment: foundComment});

        }
    })
})

// comments update route
router.put('/:comment_id', checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect('back');
        } else {
            res.redirect('/campgrounds/' + req.params.id);
        }
    })
})

// comment destroy route
router.delete('/:comment_id', checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect('back')

        } else {
            res.redirect('/campgrounds/' + req.params.id)
        }
    })
})

// middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

function checkCommentOwnership(req, res, next){
    if(req.isAuthenticated()){        
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect('back')
            } else {
                // does user own campground
                if(foundComment.author.id.equals(req.user._id)){
                    next();

                } else {
                    res.redirect('back');
                }
            }
        });
            // if not redirect
    } else {
        res.redirect('back');
        
    }

}

module.exports = router;
