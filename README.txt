Dev Setup:

1) Clone the git repo onto your hard disk

2) at /carouit, run npm install in your Terminal

3) run 'yarn start' command in your Terminal (Development) / run 'yarn build' for production build



------------------------------------------------------- OTHER INFO -------------------------------------------------------

Initialization:
    The project was initialized using WebStorm's [React App] initializer


Data structure:
    No backend was implemented on this application. All data were stored as part of React components' states, with the exception of
    topics, which are stored as part of the App component (App.js) as a variable.

    All topics are stored in the 'topics' array variable, with each topic taking the form of an object
    e.g
    {title: '',
    upvotes: 3,
    posted_date: <momentjs object>  // dates are stored as momentjs objects so that different dates can be shown without the need for parsing by using the .format() function
    }

    Even though no backend was implemented, the code is ready for backend implementation. Simply replace the code in loadTopics() at App.js with AJAX call to the backend.


Bootstrap:
    The 'New Topic' modal is implemented using the 'react-dynamic-modal' library, which is not part of bootstrap or react-bootstrap.
    Use of React-Bootstrap was avoided because it is still in beta. So, Twitter bootstrap is still being implemented through classNames instead of React components.


