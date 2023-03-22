<template>
  <div class="card" >
        <div class="dot"><b-icon :icon="tool.icon || 'stars'"></b-icon></div>
        <div class="txt-box">
            <span class="title">{{tool.title}}</span>
            <span class="info">{{tool.info}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tool: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  position: relative;
  width: calc(90% / 3);
  height: 90px;
  margin: 10px 6px;
  padding: 0 4px;
  transition: 0.3s;
  transition-timing-function: ease-in-out;
  border-radius: 12px;
  border: 1px solid #e3e8f7;
  box-shadow: 0 8px 16px -4px #2c2d300c;
  background: #f7f9fe;
  transform: scale(1.05);
  cursor: pointer;
}
.dot {
  border-radius: 50%;
  margin: 15px 20px 15px;
  background: #425AEF;
  float: left;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  transition: 0.6s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
}
.txt-box {
  flex-grow: 1;
  display: flex;
  padding-right: 3px;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei";
  overflow: hidden;
  /* line-height: 17px; */
}
.txt-box .title {
  display: block;
  text-align: left;
  font-size: 19px;
  word-break: keep-all;
  color: #363636;
  transition: 0.6s;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.txt-box .info {
  white-space: normal;
  height: 24px;
  padding: 5px 10px 16px 0;
  text-align: left;
  color: #363636;
  font-size: 0.6em;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  opacity: 0.7;
}
.card:hover {
  transform: scale(1);
  background: #425aef;
  border: 1px solid #425AEF;
  box-shadow:  0 8px 12px -3px #425AEF23;
}
.card:hover .dot {
  transition: 0.6s;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 8px;
  min-width: 0px;
  min-height: 0px;
}
.card:hover .txt-box {
  max-width: 100%;
}
.card:hover .title, .card:hover .info {
  color: #fff;
}
.dark {
  background-color: #000;
}
@media (680px <= width < 1140px) {
  .img {
    height: 200px;
  }
  .dot {
    margin: 12px;
  }
  .txt-box .info {
    display: none;
  }
  .card:hover .txt-box .info {
    display: inline-block;
  }
}

@media (width < 680px) {
  .img {
    height: 140px;
  }
  .dot {
    margin: 15px 50%;
    transform: translate(-50%, 0);
  }
  .txt-box .title,
  .txt-box .info {
    display: none;
  }
  .card:hover .txt-box .title {
    display: block;
  }
}
</style>