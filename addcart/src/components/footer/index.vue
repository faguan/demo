<template>
	<div class="footer">
		<router-link to='Orders'>
			订单
		</router-link>
		<router-link to='Myorders'>
			我的订单
		</router-link>
		<router-link to='more'>
			更多...
		</router-link>
	</div>
</template>

<script>
	
</script>

<style>
	.footer{
		position: fixed;
		z-index: 1;
		width: 100%;
		bottom: 0;
		height: 1.333333rem;
		background-color: rgba(0,0,0,.2);
	}
	.footer a{
		display: block;
		text-align: center;
		line-height: 1.333333rem;
		float: left;
		font-size: 0.32rem;
		width: 33%;
	}
</style>