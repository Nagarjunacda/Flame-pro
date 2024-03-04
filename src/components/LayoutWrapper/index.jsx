function LayoutWrapper({ children }) {
    return (
        <div>
          {/* <Header data={item} isHeaderVisible={isHeaderVisible} /> */}
          {children}
          {/* <FooterTop isFooterVisible={isFooterVisible} />
          <Footer footerData={footerItem} isFooterVisible={isFooterVisible} /> */}
        </div>
    )
  }
  export default LayoutWrapper