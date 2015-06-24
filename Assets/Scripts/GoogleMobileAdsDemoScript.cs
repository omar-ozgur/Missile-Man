using System;
using UnityEngine;
using GoogleMobileAds;
using GoogleMobileAds.Api;

// Example script showing how to invoke the Google Mobile Ads Unity plugin.
public class GoogleMobileAdsDemoScript : MonoBehaviour
{
	#if UNITY_EDITOR
	string adUnitId = "unused";
	#elif UNITY_ANDROID
	string adUnitId = "AdUnitId";
	#elif UNITY_IPHONE
	string adUnitId = "INSERT_IOS_INTERSTITIAL_AD_UNIT_ID_HERE";
	#else
	string adUnitId = "unexpected_platform";
	#endif

    private InterstitialAd interstitial;

	private AdRequest createAdRequest()
	{
		return new AdRequest.Builder().Build();
//			.AddTestDevice(AdRequest.TestDeviceSimulator)
//				.AddTestDevice("CC4FA5B43E2ED7B643E5E562F9433BDC")
//				.AddKeyword("game")
//				.SetGender(Gender.Male)
//				.TagForChildDirectedTreatment(false)
//				.AddExtra("color_bg", "9B30FF")
//				.Build();
		
	}

	void FixedUpdate()
	{
		if(DontDestroy.number >= 7 && PlayerPrefs.GetInt("p1a5I8d") != 951402483)
		{
			interstitial.Show();
			DontDestroy.number = 0;
		}
	}

	void Awake()
	{
		RequestInterstitial();
		DontDestroyOnLoad(this);
	}

    private void RequestInterstitial()
    {
		interstitial = new InterstitialAd(adUnitId);

        interstitial.AdLoaded += HandleInterstitialLoaded;
        interstitial.AdFailedToLoad += HandleInterstitialFailedToLoad;
        interstitial.AdOpened += HandleInterstitialOpened;
        interstitial.AdClosing += HandleInterstitialClosing;
        interstitial.AdClosed += HandleInterstitialClosed;
        interstitial.AdLeftApplication += HandleInterstitialLeftApplication;

		//interstitial.LoadAd(new AdRequest.Builder().Build());
		interstitial.LoadAd(createAdRequest());
    }

//    private void RequestInterstitial()
//    {
//        // Create an interstitial.
//        interstitial = new InterstitialAd(adUnitId);
//        // Register for ad events.
//        interstitial.AdLoaded += HandleInterstitialLoaded;
//        interstitial.AdFailedToLoad += HandleInterstitialFailedToLoad;
//        interstitial.AdOpened += HandleInterstitialOpened;
//        interstitial.AdClosing += HandleInterstitialClosing;
//        interstitial.AdClosed += HandleInterstitialClosed;
//        interstitial.AdLeftApplication += HandleInterstitialLeftApplication;
//        // Load an interstitial ad.
//        interstitial.LoadAd(createAdRequest());
//    }
//
//    private void ShowInterstitial()
//    {
//        if (interstitial.IsLoaded())
//        {
//            interstitial.Show();
//        }
//        else
//        {
//            print("Interstitial is not ready yet.");
//        }
//    }
//
//    #region Banner callback handlers
//
//    public void HandleAdLoaded(object sender, EventArgs args)
//    {
//        print("HandleAdLoaded event received.");
//    }
//
//    public void HandleAdFailedToLoad(object sender, AdFailedToLoadEventArgs args)
//    {
//        print("HandleFailedToReceiveAd event received with message: " + args.Message);
//    }
//
//    public void HandleAdOpened(object sender, EventArgs args)
//    {
//        print("HandleAdOpened event received");
//    }
//
//    void HandleAdClosing(object sender, EventArgs args)
//    {
//        print("HandleAdClosing event received");
//    }
//
//    public void HandleAdClosed(object sender, EventArgs args)
//    {
//        print("HandleAdClosed event received");
//    }
//
//    public void HandleAdLeftApplication(object sender, EventArgs args)
//    {
//        print("HandleAdLeftApplication event received");
//    }
//
//    #endregion
//
    #region Interstitial callback handlers

    public void HandleInterstitialLoaded(object sender, EventArgs args)
    {

    }

    public void HandleInterstitialFailedToLoad(object sender, AdFailedToLoadEventArgs args)
    {
        print("HandleInterstitialFailedToLoad event received with message: " + args.Message);
    }

    public void HandleInterstitialOpened(object sender, EventArgs args)
    {
        print("HandleInterstitialOpened event received");
    }

    void HandleInterstitialClosing(object sender, EventArgs args)
    {
        print("HandleInterstitialClosing event received");
    }

    public void HandleInterstitialClosed(object sender, EventArgs args)
    {
        print("HandleInterstitialClosed event received");
		interstitial.Destroy();
		RequestInterstitial();
    }

    public void HandleInterstitialLeftApplication(object sender, EventArgs args)
    {
        print("HandleInterstitialLeftApplication event received");
		interstitial.Destroy();
		RequestInterstitial();
    }

    #endregion
}
