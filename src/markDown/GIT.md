# GIT

GIT：版本控制工具，分布式版本控制系统（DVCS);

## GIT简史

1991 - 2002年间Linux维护工作很多浪费在了提交补丁和保存归档繁琐事务上

2002年项目组开始启用分布式版本控制系统BitKeeper来管理和维护代码

2005年Bitkeeper商业公司结束了与Linux开源社区的合作免费使用的权利，迫使了Linux开源社区（特别是 Linux 的缔造者 Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统。 他们对新的系统制订了若干目标：

- 速度
- 简单的设计
- 对非线性开发模式的强力支持（允许成千上万个并行开发的分支）
- 完全分布式
- 有能力高效管理类似 Linux 内核一样的超大规模项目（速度和数据量）

自诞生于 2005 年以来，Git 日臻成熟完善，在高度易用的同时，仍然保留着初期设定的目标。 它的速度飞快，极其适合管理大项目，有着令人难以置信的非线性分支管理系统

>学习参考GIT官网文档



## GIT三种状态

Git 有三种状态，你的文件可能处于其中之一： **已提交（committed）**、**已修改（modified）** 和 **已暂存（staged）**

|   状态    |                             说明                             |
| :-------: | :----------------------------------------------------------: |
| committed |             表示数据已经安全地保存在本地数据库中             |
| modified  |             表示修改了文件，但还没保存到数据库中             |
|  staged   | 表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中 |

GIT项目会有三个阶段：**工作区、暂存区、Git目录**。

![](.\source\areas.png)

工作区是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改；

暂存区是一个文件，保存了下次将要提交的文件列表信息，一般在 Git 仓库目录中。 按照 Git 的术语叫做“索引”，不过一般说法还是叫“暂存区”；

Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据；

基本的 Git 工作流程如下：

1. 在工作区中修改文件。
2. 将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区。
3. 提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录。

> 在上次检出后，做了修改但还没有存放到暂存区域，就是**已修改**状态
>
> 文本修改后并存放到暂存区，就是**已暂存**状态
>
> Git目录保存着特定版本文件，就是**已提交**状态



## 初次运行配置

#### 用户信息

安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：

```git
$ git config --global user.name "----"
$ git config --global user.email --@--.com
```

#### 检查配置信息

命令 `git config --list`会展示所有Git当时能找到的配置

也可以通过 `git config <key>`来检查Git某一项配置

```git
$ git config --list
init.defaultbranch=master
user.name=cimu
user.email=cimu91894@qq.com
core.editor=vs
core.repositoryformatversion=0
remote.origin.url=git@github.com:CiMu001/cimublog.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.main.remote=origin
branch.main.merge=refs/heads/master
...


// 单项查询
$ git config user.name
cimu
```

core.editor 配置项

| 配置                                      | 说明            |
| ----------------------------------------- | --------------- |
| git config --global core.editor nano      | git默认编辑器   |
| git config --global core.editor vim       | vim编辑器       |
| git config --global core.editor gedit     | gedit编辑器     |
| git config --global core.editor notepad++ | notepad++编辑器 |
| git config --global core.editor Code      | vscode编辑器    |
| git config --global core.editor emacs     | emacs编辑器     |



## 获取帮助

Git有三种方式获取到Git命令手册：

```git
$ git help <verb>
$ git <verb> --help
$ man git-<verb>

// 例子：获取config 命令手册
$ git help config
```

同时也可以使用 `-h` 获取**可用选项**的快速手册:

```git
$ git commit -h
usage: git commit [<options>] [--] <pathspec>...

    -q, --quiet           suppress summary after successful commit
    -v, --verbose         show diff in commit message template

Commit message options
    -F, --file <file>     read message from file
    --author <author>     override author for commit
    --date <date>         override date for commit
    -m, --message <message>
                          commit message
    -c, --reedit-message <commit>
                          reuse and edit message from specified commit
    -C, --reuse-message <commit>
                          reuse message from specified commit
...
```



## Git 基础

学习配置并初始化一个仓库（repository)，开始或停止追踪(track)文件、暂存(stage)、或提交(commit)更改；

配置Git来忽略指定的文件和文件模式，撤销错误操作，浏览项目历史版本以及不同提交之间的差异，向远程仓库推送或拉取文件；

### 获取Git仓库

获取Git项目仓库分两种：

- 尚未进行版本控制的本地目录转换为Git仓库
- 从服务器克隆Git仓库

#### 初始化仓库

首先要进入到当前项目的目录下，执行 `git init`，会创建一个 `.git`的子目录，子目录含有你初始化的 Git 仓库中所有的必须文件；此时，你的项目里的文件还没有被跟踪；

通过 `git add` 命令来指定所需的文件进行追踪， `git commit`命令来提交修改；

```git
$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
```

#### 克隆现在仓库

克隆仓库使用 `git clone <url>`, Git 支持多种数据传输协议：`https://` 协议， SSH 传输协议， 文件下载；

```git
$ git clone https://github.com/CiMu001/50PracticeDemo.git
```



### 更新仓库代码

我们编写的代码文件都会被Git分别为 **已跟踪**、**未跟踪**两种状态；

**是否跟踪：**被指令是否使用`git add`添加过文件；

**已跟踪**文件也会存在 **未修改、已修改、已暂存**三种状态；

下图为代码文件在不同时候的状态：

<img src="source/gitworkstatechange.png" style="zoom:67%;" />

**检查当前文件状态**

可以用 `git status` 命令查看哪些文件处于什么状态。

如果你使用 `git status -s` 命令或 `git status --short` 命令，你将得到一种格式更为紧凑的输出

```git
$ git status
On branch main
Your branch is up to date with 'origin/master'.

Changes to be committed: // 指出通过add新增追踪文件， 已暂存状态；
  (use "git restore --staged <file>..." to unstage)
        new file:   src/markDown/GIT.md
        new file:   src/markDown/source/areas.png

Changes not staged for commit: // 指出修改的文件，未commit文件， 已修改状态；
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   postcss.config.js
        modified:   src/assets/style/markdown.scss
        modified:   src/components/MarkdownShow.vue
        modified:   src/main.js
        modified:   src/markDown/GIT.md
        modified:   "src/markDown/Vue\347\254\224\350\256\260.md"
        modified:   src/mock/markdownList.json

Untracked files:  // 指出新增的文件，未跟踪文件，未跟踪状态
  (use "git add <file>..." to include in what will be committed)
        src/markDown/source/gitworkstatechange.png

```

 **跟踪新文件**

使用命令 `git add` 开始跟踪一个文件， 存到暂存区；

```git
$ git add src/markDown/source/gitworkstatechange.png
```



**忽略文件**

可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件的模式，这些文件无需纳入 Git 的管理

```git
# - -  - - - - 忽略案例  - - - - - -  -
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

