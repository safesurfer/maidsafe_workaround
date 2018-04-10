import React from 'react'
import { withRouteData, Link } from 'react-static'
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { duotoneLight } from 'react-syntax-highlighter/styles/prism';

export default withRouteData(({ data }) => {
  console.log('datass', data)
  return (
    <div className="platform">
      <div className="content">
        <h1 className="page-title">{data.pageTitle}</h1>
        <h2 className="page-sub-title">{data.installation.title}</h2>
        <p className="para">{data.installation.para1}</p>
        <p className="para last">{data.installation.para2}</p>
        <h2 className="page-sub-title">{data.setupElectron.title}</h2>
        <p className="para">
          {`${data.setupElectron.para1.chunk1} `}
          <span className="highlights">{data.setupElectron.para1.highlight1}</span>
          {` ${data.setupElectron.para1.chunk2} `}
          <span className="highlights">{data.setupElectron.para1.highlight2}</span>
          {` ${data.setupElectron.para1.chunk3}`}
        </p>
        <p className="quote">{data.setupElectron.quote1}</p>
        <div className="code-block">
          <SyntaxHighlighter language='javascript' style={duotoneLight}>{data.setupElectron.code1}</SyntaxHighlighter>
        </div>
        <div className="list-type-1">
          <ul>
            <li>{data.setupElectron.list1.list1_1}</li>
            <li>{`${data.setupElectron.list1.list1_2.chunk1} `}<Link to={data.setupElectron.list1.list1_2.link1.href}>{data.setupElectron.list1.list1_2.link1.name}</Link>{` ${data.setupElectron.list1.list1_2.chunk2}`}</li>
            <li>{data.setupElectron.list1.list1_3}</li>
          </ul>
        </div>
      </div>
      <div className="nav">
        <div className="nav-i">
          <div className="nav-i-head">{data.pageNav.nav1.name}</div>
          <div className="nav-i-links">
            <Link to={data.pageNav.nav1.subNavs.sub1.href}>{data.pageNav.nav1.subNavs.sub1.name}</Link>
          </div>
        </div>
        <div className="nav-i">
          <div className="nav-i-head"><Link to={data.pageNav.nav2.href}>{data.pageNav.nav2.name}</Link></div>
        </div>
      </div>
    </div>
  );
})
