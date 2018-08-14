<template>
    <div>
        //使用组件
        <toDoList></toDoList>
    </div>
</template>

<script>
// 导入此页面用到的组件
import toDoList from '@/components/toDoList'

export default {
// 调用的组件
  components: {
    toDoList
  }
}
</script>

<style>
</style>
