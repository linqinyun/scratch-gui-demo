{
  this.props.sessionExists ? (
    this.props.username ? (
      // ************ user is logged in ************
      <React.Fragment>
        <a href="/mystuff/">
          <div
            className={classNames(
              styles.menuBarItem,
              styles.hoverable,
              styles.mystuffButton
            )}
          >
            <img
              className={styles.mystuffIcon}
              src={mystuffIcon}
            />
          </div>
        </a>
        <AccountNav
          className={classNames(
            styles.menuBarItem,
            styles.hoverable,
            { [styles.active]: this.props.accountMenuOpen }
          )}
          isOpen={this.props.accountMenuOpen}
          isRtl={this.props.isRtl}
          menuBarMenuClassName={classNames(styles.menuBarMenu)}
          onClick={this.props.onClickAccount}
          onClose={this.props.onRequestCloseAccount}
          onLogOut={this.props.onLogOut}
        />
      </React.Fragment>
    ) : (
        // ********* user not logged in, but a session exists
        // ********* so they can choose to log in
        <React.Fragment>
          <div
            className={classNames(
              styles.menuBarItem,
              styles.hoverable
            )}
            key="join"
            onMouseUp={this.props.onOpenRegistration}
          >
            <FormattedMessage
              defaultMessage="Join Scratch"
              description="Link for creating a Scratch account"
              id="gui.menuBar.joinScratch"
            />
          </div>
          <div
            className={classNames(
              styles.menuBarItem,
              styles.hoverable
            )}
            key="login"
            onMouseUp={this.props.onClickLogin}
          >
            <FormattedMessage
              defaultMessage="Sign in"
              description="Link for signing in to your Scratch account"
              id="gui.menuBar.signIn"
            />
            <LoginDropdown
              className={classNames(styles.menuBarMenu)}
              isOpen={this.props.loginMenuOpen}
              isRtl={this.props.isRtl}
              renderLogin={this.props.renderLogin}
              onClose={this.props.onRequestCloseLogin}
            />
          </div>
        </React.Fragment>
      )
  ) : (
      // ******** no login session is available, so don't show login stuff
      <React.Fragment>
        {this.props.showComingSoon ? (
          <React.Fragment>
            {/* <MenuBarItemTooltip id="mystuff">
                                            <div
                                                className={classNames(
                                                    styles.menuBarItem,
                                                    styles.hoverable,
                                                    styles.mystuffButton
                                                )}
                                            >
                                                <img
                                                    className={styles.mystuffIcon}
                                                    src={mystuffIcon}
                                                />
                                            </div>
                                        </MenuBarItemTooltip> */}
            <MenuBarItemTooltip
              id="account-nav"
              place={this.props.isRtl ? 'right' : 'left'}
            >
              <div
                className={classNames(
                  styles.menuBarItem,
                  styles.hoverable,
                  styles.accountNavMenu
                )}
              >
                <img
                  className={styles.profileIcon}
                  src={profileIcon}
                />
                <span>
                  {'登录'}
                </span>
                <img
                  className={styles.dropdownCaretIcon}
                  src={dropdownCaret}
                />
              </div>
            </MenuBarItemTooltip>
          </React.Fragment>
        ) : []}
      </React.Fragment>
    );
}
