const Landing = (props) => {
  const handleOpenWOW = () => {
    // https://wow-dev.pubscale.com/?app_id=41254231&user_id=test_jjs&sandbox=false

    // const baseURL = `https://wow-dev.pubscale.com/`; // move this to env variable
    const baseURL = `http://localhost:3002/`; // move this to env variable
    const WowUrl = new URL(baseURL);
    WowUrl.searchParams.set("app_id", "61575841");
    WowUrl.searchParams.set("user_id", props.userId);
    WowUrl.searchParams.set("sandbox", "true"); // Flage must be true if you want to enable sandbox mode
    window.open(WowUrl.href, "_blank");
  };
  return (
    <div className="pl-32 pr-32 pt-14 pb-14 mt-[var(--nav-height)] grid lg:grid-cols-[1fr_1fr] items-center  ">
      <div className="content ">
        <h1 className="text-7xl font-semibold text-white mb-8">
          Experience the <span className="text-[#00A910]">Offerwall</span> in
          Action
        </h1>
        <p className="text-2xl text-[#98a5a6] mb-12 font-light">
          Test the integration flow, simulate offer completions and verify
          rewards in real time.
        </p>
        <button
          className="bg-white text-[#001D21] rounded-[5px] text-lg pt-4 pb-4  pr-10.5 pl-10.5 cursor-pointer hover:text-[#00A910]"
          onClick={handleOpenWOW}
        >
          Launch Offerwall
        </button>
      </div>
      <div className="content-image flex items-center justify-end">
        <img src="/offerwall-image.svg" />
      </div>
    </div>
  );
};

export default Landing;
