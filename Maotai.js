// 茅台 Scriptable 仓库不能访问解决方案
// 注：因仓库部分资源已删除，不能保证所有小组件可正常运行

const url = $request.url.replace(
  /https:\/\/gitcode\.net\/4qiao\/([^/]+)\/(-\/)?raw\//,
  'https://raw.gitcode.com/4qiao/$1/raw/'
)

const headers = $request.headers
headers['PRIVATE-TOKEN'] = 'JMYS13evfmkL8dyBZMs8U9zv'

$done({ url, headers })

$notification.post('Shadowrocket', 'Browser web page', 'https://')