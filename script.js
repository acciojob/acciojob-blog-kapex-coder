//your JS code here. If required.

const blogs = [
	{
		image_url: "https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI2fHxvcHRpbWl6YXRpb258ZW58MHx8fHwxNjcxMDAyOTIz&ixlib=rb-4.0.3&q=80&w=2000",
		image_height: "200px",
		title: "Brute Force vs. Optimization",
		link: "https://acciojob.com/blog/brute-force-vs-optimization/",
		paragraph: "We can say that optimization is..."
	},
	{
		image_url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQxfHxjb21wZXRpdHZlJTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNjcwOTk4ODU0&ixlib=rb-4.0.3&q=80&w=2000",
		image_height: "200px",
		title: "DSA vs. Competitive Programming",
		link: "https://acciojob.com/blog/dsa-vs-competitive-programming/",
		paragraph: "DSA or Competitive programming?..."
	},
	{
		image_url: "https://acciojob.com/blog/content/images/size/w2000/2023/02/Screenshot-2023-02-06-at-7.28.31-PM.png",
		image_height: "200px",
		title: "	Complete Guide on FlexBox",
		link: "https://acciojob.com/blog/untitled-19/",
		paragraph: "As a job seeker, you may wonder..."
	}
]

const blogs_container = document.getElementById("blogs");
blogs_container.innerHTML = blogs.map((blog) => {
	return (
	  `
		<div>
		   <img 
			   src=${blog.image_url} 
			   alt=${blog.title} 
			   height=${blog.image_height} 
		   />
		   <h2>
			   <a href=${blog.link}>
				${blog.title}
			   </a>
		   </h2>
		   <p>${blog.paragraph}</p>
		</div>
	  `
	)
});





