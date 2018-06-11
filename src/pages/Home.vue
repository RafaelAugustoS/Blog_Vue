<template>
	<main>
		<h1>{{page_title}}</h1>

		<div v-for="(post, index) in posts" :key="post.slug + '_' + index">
			<article>
				<figure>
              <!-- Bind results using a `:` -->
              <!-- Use a `v-if`/`else` if their is a `featured_image` -->
              <img v-if="post.featured_image" :src="post.featured_image" alt="">
              <img v-else src="http://via.placeholder.com/250x250" alt="">
            </figure>
            <h2>{{ post.title }}</h2>
            <p>{{ post.summary }}</p>
			</article>
		</div>
	</main>
</template>

<script>
	import butter from '@/buttercms'
	export default{
		data(){
			return{
				page_title: 'Blog',
				posts: []
			}
		},
		created(){
			this.getPosts()
		},
		methods: {
			getPosts(){
				butter.post.list({
		          page: 1,
		          page_size: 10
		        }).then((res) => {
		          this.posts = res.data.data
		        })

			}
		}
	}
</script>