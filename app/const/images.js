const images = {
    logo: require('../resources/images/logo.png'),

    //splash screen
    splash_start: require('../resources/images/splash/start.png'),

    //auth screen
    login_but: require('../resources/images/login/login.png'),
    signup_but: require('../resources/images/login/signup.png'),
    resetpass_but: require('../resources/images/login/resetpassword.png'),
    backlogin_but: require('../resources/images/login/backlogin.png'),
    confirm_img: require('../resources/images/login/confirm.png'),

    //tab bar
    home_active: require('../resources/images/tab/Home_Active.png'),
    home_inactive: require('../resources/images/tab/Home_Inactive.png'),
    video_active: require('../resources/images/tab/Video_Active.png'),
    video_inactive: require('../resources/images/tab/Video_Inactive.png'),
    music_active: require('../resources/images/tab/Music_Active.png'),
    music_inactive: require('../resources/images/tab/Music_Inactive.png'),
    picture_active: require('../resources/images/tab/Picture_Active.png'),
    picture_inactive: require('../resources/images/tab/Picture_Inactive.png'),
    others_active: require('../resources/images/tab/Others_Active.png'),
    others_inactive: require('../resources/images/tab/Others_Inactive.png'),

    //home screen
    send_but: require('../resources/images/home/sendbut.png'),
    receive_but: require('../resources/images/home/receivebut.png'),
    hamburger_but:require('../resources/images/home/hamburger.png'),
    trending_active: require('../resources/images/home/menu/Trending_Active.png'),
    trending_inactive: require('../resources/images/home/menu/Trending_Inactive.png'),
    subscription_active: require('../resources/images/home/menu/Subscription_Active.png'),
    subscription_inactive: require('../resources/images/home/menu/Subscription_Inactive.png'),
    history_active: require('../resources/images/home/menu/History_Active.png'),
    history_inactive: require('../resources/images/home/menu/History_Inactive.png'),
    liked_active: require('../resources/images/home/menu/Liked_Active.png'),
    liked_inactive: require('../resources/images/home/menu/Liked_Inactive.png'),
    logout: require('../resources/images/home/menu/Logout.png'),
    photo: require('../resources/images/home/menu/photo.png'),
    recommend_but: require('../resources/images/home/recommend.png'),

    // Nav Top
    navtop_icon_backbutton: require('../resources/images/NavTop/navtop_icon_backbutton.png'),
    navtop_icon_download: require('../resources/images/NavTop/navtop_icon_download.png'),
    navtop_icon_hamburger: require('../resources/images/NavTop/navtop_icon_hamburger.png'),
    navtop_icon_logo: require('../resources/images/NavTop/navtop_icon_logo.png'),
    navtop_icon_search: require('../resources/images/NavTop/navtop_icon_search.png'),

    // Icons
    icon_close: require('../resources/images/Icons/icon_close.png'),
    icon_category_app: require('../resources/images/Icons/icon_category_app.png'),
    icon_category_archive: require('../resources/images/Icons/icon_category_archive.png'),
    icon_category_documents: require('../resources/images/Icons/icon_category_documents.png'),
    icon_category_favorite: require('../resources/images/Icons/icon_category_favorite.png'),
    icon_category_history: require('../resources/images/Icons/icon_category_history.png'),
    icon_category_music: require('../resources/images/Icons/icon_category_music.png'),
    icon_category_picture: require('../resources/images/Icons/icon_category_picture.png'),
    icon_category_video: require('../resources/images/Icons/icon_category_video.png'),
    icon_detail_arrow_down: require('../resources/images/Icons/icon_detail_arrow_down.png'),
    icon_detail_arrow_up: require('../resources/images/Icons/icon_detail_arrow_up.png'),
    icon_detail_arrow_right: require('../resources/images/Icons/icon_detail_arrow_right.png'),
    icon_detail_dislike_active: require('../resources/images/Icons/icon_detail_dislike_active.png'),
    icon_detail_dislike_deactive: require('../resources/images/Icons/icon_detail_dislike_deactive.png'),
    icon_detail_download_active: require('../resources/images/Icons/icon_detail_download_active.png'),
    icon_detail_download_deactive: require('../resources/images/Icons/icon_detail_download_deactive.png'),
    icon_detail_like_active: require('../resources/images/Icons/icon_detail_like_active.png'),
    icon_detail_like_deactive: require('../resources/images/Icons/icon_detail_like_deactive.png'),
    icon_detail_menu: require('../resources/images/Icons/icon_detail_menu.png'),
    icon_select_active: require('../resources/images/Icons/icon_select_active.png'),
    icon_select_deactive: require('../resources/images/Icons/icon_select_deactive.png'),
    icon_share_active: require('../resources/images/Icons/icon_share_active.png'),
    icon_share_deactive: require('../resources/images/Icons/icon_share_deactive.png'),
    icon_share_receive: require('../resources/images/Icons/icon_share_receive.png'),
    icon_share_send: require('../resources/images/Icons/icon_share_send.png'),
    icon_storage: require('../resources/images/Icons/icon_storage.png'),
    icon_picture_like_deactive: require('../resources/images/Icons/icon_picture_like_deactive.png'),
    icon_picture_dislike_deactive: require('../resources/images/Icons/icon_picture_dislike_deactive.png'),
    icon_picture_share_deactive: require('../resources/images/Icons/icon_picture_share_deactive.png'),
    icon_picture_download_deactive: require('../resources/images/Icons/icon_picture_download_deactive.png'),
    icon_player_play: require('../resources/images/Icons/icon_player_play.png'),
    icon_player_pause: require('../resources/images/Icons/icon_player_pause.png'),
    icon_player_play_black: require('../resources/images/Icons/icon_player_play_black.png'),
    icon_player_pause_black: require('../resources/images/Icons/icon_player_pause_black.png'),
    icon_player_prev: require('../resources/images/Icons/icon_player_prev.png'),
    icon_player_next: require('../resources/images/Icons/icon_player_next.png'),
    icon_player_repeat: require('../resources/images/Icons/icon_player_repeat.png'),
    icon_player_shuffle: require('../resources/images/Icons/icon_player_shuffle.png'),
    icon_like: require('../resources/images/Icons/icon_like.png'),
    icon_unlike: require('../resources/images/Icons/icon_unlike.png'),

    // Images
    image_album: require('../resources/images/Images/image_album.jpg'),
    image_item_archive: require('../resources/images/Images/image_item_archive.png'),
    image_item_excel: require('../resources/images/Images/image_item_excel.png'),
    image_item_music: require('../resources/images/Images/image_item_music.png'),
    image_item_music1: require('../resources/images/Images/image_item_music1.png'),
    image_item_pdf: require('../resources/images/Images/image_item_pdf.png'),
    image_item_picture: require('../resources/images/Images/image_item_picture.png'),
    image_item_powerpoint: require('../resources/images/Images/image_item_powerpoint.png'),
    image_item_video: require('../resources/images/Images/image_item_video.png'),
    image_item_word: require('../resources/images/Images/image_item_word.png'),
    image_video_cover: require('../resources/images/Images/image_video_cover.png'),
    image_connect_phone: require('../resources/images/Images/image_connect_phone.png'),
    image_connect_retry: require('../resources/images/Images/image_connect_retry.png'),
    image_connect_wifi: require('../resources/images/Images/image_connect_wifi.png'),
    image_picture_wallpaper: require('../resources/images/Images/image_picture_wallpaper.png'),
    image_picture_gif: require('../resources/images/Images/image_picture_gif.png'),

    // Share Content
    shareFileIcon: require('../resources/images/shareContent/shareFileIcon.png'),
    shareImageIcon: require('../resources/images/shareContent/shareImageIcon.png'),
    shareMusicIcon: require('../resources/images/shareContent/shareMusicIcon.png'),
    shareSocialIcon: require('../resources/images/shareContent/shareSocialIcon.png'),
    shareVideoIcon: require('../resources/images/shareContent/shareVideoIcon.png'),
    copyClipboardIcon: require('../resources/images/shareContent/copyClipboardIcon.png'),
    tickIcon: require('../resources/images/shareContent/tickIcon.png'),

};

export default images;