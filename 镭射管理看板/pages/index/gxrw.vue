<template>
	<view>
		<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
		 @clickItem="onClickItem" />
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/tab-control.vue';
	export default {
		data() {
			return {
				items: [
					'全部',
					'已付款',
					'已结算',
					'已关闭'
				],
				styles: [{
					value: 'button',
					text: '按钮',
					checked: true
				}, {
					value: 'text',
					text: '文字'
				}],
				colors: [
					'#007aff',
					'#4cd964',
					'#dd524d'
				],
				current: 0,
				colorIndex: 0,
				activeColor: '#F9263E',
				styleType: 'button',
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
