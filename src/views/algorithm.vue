<template>
 <div class="layout-anim-child">
<div class="codebase">
  <div class="codebase-proj">
    <div class="proj">
      <div class="proj-title">
        <div class="proj-title-title">MMPreTrain<sup class="sup-text">NEW</sup></div>
        <div class="proj-title-link">
          <img
            class="proj-title-link-github"
            src="https://openmmlab.com/static/GithubFilled.394324e5.svg"
            alt="github"
          /><img class="proj-title-link-docs" src="https://openmmlab.com/static/RepoOutlined.8943297d.svg" alt="docs" />
        </div>
        <div class="proj-title-titleDesc">A pre-training toolbox for deep learning.</div>
      </div>
      <div class="proj-desc-wrapper">
        <div class="ant-typography">
          <ul>
            <li>Various backbones and pre-trained models</li>
            <li>
              Rich training strategies(supervised learning, self-supervised learning, etc.) and
              tricks
            </li>
            <li>High efficiency and extensibility</li>
            <li>Powerful toolkits for model analysis, visualization and experiments</li>
          </ul>
        </div>
      </div>
      <div class="proj-tips-wrapper">
        <span class="tag" style="font-size: 12px">Multimodality</span
        ><span class="tag" style="font-size: 12px">Image Classification</span
        ><span class="tag" style="font-size: 12px">Self-supervised Learning</span
        ><span class="tag" style="font-size: 12px">Pre-training</span>
      </div>
      <div class="proj-bg1"></div>
      <div class="proj-bg2"></div>
    </div>

    <div class="proj">
      <div class="proj-title">
        <div class="proj-title-title">MMPreTrain<sup class="sup-text">NEW</sup></div>
        <div class="proj-title-link">
          <img
            class="proj-title-link-github"
            src="https://openmmlab.com/static/GithubFilled.394324e5.svg"
            alt="github"
          /><img class="proj-title-link-docs" src="https://openmmlab.com/static/RepoOutlined.8943297d.svg" alt="docs" />
        </div>
        <div class="proj-title-titleDesc">A pre-training toolbox for deep learning.</div>
      </div>
      <div class="proj-desc-wrapper">
        <div class="ant-typography">
          <ul>
            <li>Various backbones and pre-trained models</li>
            <li>
              Rich training strategies(supervised learning, self-supervised learning, etc.) and
              tricks
            </li>
            <li>High efficiency and extensibility</li>
            <li>Powerful toolkits for model analysis, visualization and experiments</li>
          </ul>
        </div>
      </div>
      <div class="proj-tips-wrapper">
        <span class="tag" style="font-size: 12px">Multimodality</span
        ><span class="tag" style="font-size: 12px">Image Classification</span
        ><span class="tag" style="font-size: 12px">Self-supervised Learning</span
        ><span class="tag" style="font-size: 12px">Pre-training</span>
      </div>
      <div class="proj-bg1"></div>
      <div class="proj-bg2"></div>
    </div>


    <div class="proj">
      <div class="proj-title">
        <div class="proj-title-title">MMPreTrain<sup class="sup-text">NEW</sup></div>
        <div class="proj-title-link">
          <img
            class="proj-title-link-github"
            src="https://openmmlab.com/static/GithubFilled.394324e5.svg"
            alt="github"
          /><img class="proj-title-link-docs" src="https://openmmlab.com/static/RepoOutlined.8943297d.svg" alt="docs" />
        </div>
        <div class="proj-title-titleDesc">A pre-training toolbox for deep learning.</div>
      </div>
      <div class="proj-desc-wrapper">
        <div class="ant-typography">
          <ul>
            <li>Various backbones and pre-trained models</li>
            <li>
              Rich training strategies(supervised learning, self-supervised learning, etc.) and
              tricks
            </li>
            <li>High efficiency and extensibility</li>
            <li>Powerful toolkits for model analysis, visualization and experiments</li>
          </ul>
        </div>
      </div>
      <div class="proj-tips-wrapper">
        <span class="tag" style="font-size: 12px">Multimodality</span
        ><span class="tag" style="font-size: 12px">Image Classification</span
        ><span class="tag" style="font-size: 12px">Self-supervised Learning</span
        ><span class="tag" style="font-size: 12px">Pre-training</span>
      </div>
      <div class="proj-bg1"></div>
      <div class="proj-bg2"></div>
    </div>
















  </div>

  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.proj-title-link-demo,.proj-title-link-docs,.proj-title-link-github {
    width: 20px;
    height: 20px;
    cursor: pointer
}

.layout-anim-child {
    background-color: #fff;
    position: relative;
    min-height: 100vh;
}
.codebase {
    padding: 64px 24px;
    max-width: 1080px;
    margin: 0 auto;
}

.codebase-proj {
    display: flex;
    flex-flow: row wrap;
    max-width: 1080px;
}
.proj {
    display: inline-block;
    position: relative;
    border-radius: 2em;
    padding: 2em;
    min-height: 200px;
    width: 320px;
    margin: 10px;
    overflow: hidden;
    background: #c4caff;
    box-shadow: 4px 4px 14px rgba(0,48,130,.1)
}
.proj:hover {
    box-shadow: 2px 4px 12px rgba(0,0,0,.2);
    transition: all 1s cubic-bezier(0,0,.5,1)
}
.proj-desc-wrapper {
    font-size: 12px;
    max-height: 72px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 4px;
    margin-bottom: 6px;
    transition: max-height 0.5s;
    cursor: pointer;
}
.proj-desc-wrapper:hover {
    max-height: 300px;
    transition: max-height 0.5s
}
.proj-title-link {
    display: flex;
    flex-flow: row nowrap;
    font-size: 16px;
    grid-gap: 5px;
    gap: 5px;
}
.proj-tips-wrapper {
    display: flex;
    flex-flow: row wrap;
}

.proj-title-titleDesc {
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
}

.ant-typography {
    color: rgba(0,0,0,.85);
    word-break: break-word;
    
}
.tag {
    border-radius: .8em;
    background-color: #7a46f0;
    color: #fff;
    padding: .3em .8em;
    font-size: 12px;
    margin-top: 3px;
    margin-right: 2px;
}
.sup-text {
    font-size: 12px;
    font-style: italic;
    color: red;
    cursor: pointer;
}
.proj-bg1{
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    --antd-wave-shadow-color: #1890ff;
    --scroll-bar: 0;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    font-feature-settings: "tnum","tnum";
    word-wrap: break-word;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .proj-bg2 {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    position: absolute;
    top: -40px;
    right: -20px;
    background: linear-gradient(180deg,rgba(205,25,133,0),rgba(104,25,205,.8));
    -webkit-filter: blur(10px);
    filter: blur(10px)
}

</style>
