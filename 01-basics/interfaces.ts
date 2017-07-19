import { add } from "./add";

interface Post {
    id: number;
    title: string;
    author: Author;
    comments: Comment[];
}

interface Comment {
    author: Author;
    body: string;
}

interface Author {
    fname: string;
    lname: string;
}

const blogPost: Post = {
    id: 1,
    title: "Time, Clocks and the Ordering of Events in a Distributed System",
    author: {
        fname: "Leslie",
        lname: "Lamport"
    },
    comments: [
        {
            author: {
                fname: "Grace",
                lname: "Hopper"
            },
            body: "Excellent work, son!"
        },
        {
            author: {
                fname: "Brendan",
                lname: "Eich"
            },
            body: "I wish I had more time..."
        }
    ]
}

const getFullName = (author: Author) => `${author.fname} ${author.lname}`;

const getPostCommentsCount = (post: Post) => post.comments.length;

const blogPost2: Post = {
    id: 1,
    title: "On Computable Numbers",
    author: {
        fname: "Alan",
        lname: "Turing"
    },
    comments: [
        {
            author: {
                fname: "Robert",
                lname: "Martin"
            },
            body: "But can you write Clean Code™?"
        },
        {
            author: {
                fname: "Martin",
                lname: "Fowler"
            },
            body: "Eh, Uncle Bob?!"
        }
    ]
}

const blogPosts = [blogPost, blogPost2];

const getAllCommentsCount = (posts: Post[]) => posts.map(getPostCommentsCount).reduce(add);

console.log(getAllCommentsCount(blogPosts));
