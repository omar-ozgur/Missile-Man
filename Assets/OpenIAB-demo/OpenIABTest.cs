using UnityEngine;
using OnePF;
using System.Collections.Generic;

public class OpenIABTest : MonoBehaviour {
    const string SKU = "missileman.paid";
	//const string SKU = "android.test.purchased";

#pragma warning disable 0414
    string _label = "";
#pragma warning restore 0414

    bool _isInitialized = false;

	bool query = false;

	private void Awake()
	{
		DontDestroyOnLoad(this.gameObject);
	}

    private void OnEnable() {
        // Listen to all events for illustration purposes
        OpenIABEventManager.billingSupportedEvent += billingSupportedEvent;
        OpenIABEventManager.billingNotSupportedEvent += billingNotSupportedEvent;
        OpenIABEventManager.queryInventorySucceededEvent += queryInventorySucceededEvent;
        OpenIABEventManager.queryInventoryFailedEvent += queryInventoryFailedEvent;
        OpenIABEventManager.purchaseSucceededEvent += purchaseSucceededEvent;
        OpenIABEventManager.purchaseFailedEvent += purchaseFailedEvent;
        OpenIABEventManager.consumePurchaseSucceededEvent += consumePurchaseSucceededEvent;
        OpenIABEventManager.consumePurchaseFailedEvent += consumePurchaseFailedEvent;

    }
    private void OnDisable() {
        // Remove all event handlers
        OpenIABEventManager.billingSupportedEvent -= billingSupportedEvent;
        OpenIABEventManager.billingNotSupportedEvent -= billingNotSupportedEvent;
        OpenIABEventManager.queryInventorySucceededEvent -= queryInventorySucceededEvent;
        OpenIABEventManager.queryInventoryFailedEvent -= queryInventoryFailedEvent;
        OpenIABEventManager.purchaseSucceededEvent -= purchaseSucceededEvent;
        OpenIABEventManager.purchaseFailedEvent -= purchaseFailedEvent;
        OpenIABEventManager.consumePurchaseSucceededEvent -= consumePurchaseSucceededEvent;
        OpenIABEventManager.consumePurchaseFailedEvent -= consumePurchaseFailedEvent;

    }

    private void Start() {
        // Map skus for different stores
        OpenIAB.mapSku(SKU, OpenIAB_Android.STORE_GOOGLE, "missileman.paid");
		//OpenIAB.mapSku(SKU, OpenIAB_Android.STORE_GOOGLE, "android.test.purchased");

		var public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqibEPHCtfPm3Rn26gbE6vhCc1d6A072im+oWNlkUAJYV//pt1vCkYLqkkw/P2esPSWaw1nt66650vfVYc3sYY6L782n/C+IvZWQt0EaLrqsSoNfN5VqPhPeGf3wqsOvbKw9YqZWyKL4ddZUzRUPex5xIzjHHm3qIJI5v7iFJHOxOj0bLuEG8lH0Ljt/w2bNe4o0XXoshYDqpzIKmKy6OYNQOs8iBTJlfSmPrlGudmldW6CsuAKeVGm+Z+2xx3Xxsx3eSwEgEaUc1ZsMWSGsV6dXgc3JrUvK23JRJUu8X5Ec1OQLyxL3VelD5f0iKVTJ1kw59tMAVZ7DDpzPggWpUkwIDAQAB";
		
		var options = new Options();
		options.verifyMode = OptionsVerifyMode.VERIFY_SKIP;
		options.storeKeys = new Dictionary<string, string> {
			{OpenIAB_Android.STORE_GOOGLE, public_key}
		};
		
		// Transmit options and start the service
		OpenIAB.init(options);
    }

	private void FixedUpdate()
	{
		if(ClickedPurchase.tapped)
		{
			ClickedPurchase.tapped = false;
			OpenIAB.queryInventory(new string[] { SKU });
			//OpenIAB.purchaseProduct("missileman.paid");
		}
		if(ClickedPurchase.query)
		{
			ClickedPurchase.query = false;
			OpenIAB.queryInventory(new string[] { SKU });
			query = true;
		}
//		else if(ClickedRemove.tapped)
//		{
//			ClickedRemove.tapped = false;
//			PlayerPrefs.SetInt("p1a5I8d", 0);
//		}
	}

	bool VerifyDeveloperPayload(string developerPayload) {
		/*
         * TODO: verify that the developer payload of the purchase is correct. It will be
         * the same one that you sent when initiating the purchase.
         * 
         * WARNING: Locally generating a random string when starting a purchase and 
         * verifying it here might seem like a good approach, but this will fail in the 
         * case where the user purchases an item on one device and then uses your app on 
         * a different device, because on the other device you will not have access to the
         * random string you originally generated.
         *
         * So a good developer payload has these characteristics:
         * 
         * 1. If two different users purchase an item, the payload is different between them,
         *    so that one user's purchase can't be replayed to another user.
         * 
         * 2. The payload must be such that you can verify it even when the app wasn't the
         *    one who initiated the purchase flow (so that items purchased by the user on 
         *    one device work on other devices owned by the user).
         * 
         * Using your own server to store and verify developer payloads across app
         * installations is recommended.
         */
		return true;
	}

#if UNITY_ANDROID
//    private void OnGUI() {
//        float yPos = 5.0f;
//        float xPos = 5.0f;
//        float width = (Screen.width >= 800 || Screen.height >= 800) ? 320 : 160;
//        float height = (Screen.width >= 800 || Screen.height >= 800) ? 80 : 40;
//        float heightPlus = height + 10.0f;
//
////        if (GUI.Button(new Rect(xPos, yPos, width, height), "Initialize OpenIAB")) {
////            // Application public key
////            var public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqibEPHCtfPm3Rn26gbE6vhCc1d6A072im+oWNlkUAJYV//pt1vCkYLqkkw/P2esPSWaw1nt66650vfVYc3sYY6L782n/C+IvZWQt0EaLrqsSoNfN5VqPhPeGf3wqsOvbKw9YqZWyKL4ddZUzRUPex5xIzjHHm3qIJI5v7iFJHOxOj0bLuEG8lH0Ljt/w2bNe4o0XXoshYDqpzIKmKy6OYNQOs8iBTJlfSmPrlGudmldW6CsuAKeVGm+Z+2xx3Xxsx3eSwEgEaUc1ZsMWSGsV6dXgc3JrUvK23JRJUu8X5Ec1OQLyxL3VelD5f0iKVTJ1kw59tMAVZ7DDpzPggWpUkwIDAQAB";
////
////            var options = new Options();
////            options.verifyMode = OptionsVerifyMode.VERIFY_SKIP;
////            options.storeKeys = new Dictionary<string, string> {
////                {OpenIAB_Android.STORE_GOOGLE, public_key}
////            };
////
////            // Transmit options and start the service
////            OpenIAB.init(options);
////        }
//
//        if (!_isInitialized)
//            return;
//
//        if (GUI.Button(new Rect(xPos, yPos += heightPlus, width, height), "Test Purchase")) {
//            OpenIAB.purchaseProduct("android.test.purchased");
//        }
//
//        if (GUI.Button(new Rect(xPos, yPos += heightPlus, width, height), "Test Refund")) {
//            OpenIAB.purchaseProduct("android.test.refunded");
//        }
//
//        if (GUI.Button(new Rect(xPos, yPos += heightPlus, width, height), "Test Item Unavailable")) {
//            OpenIAB.purchaseProduct("android.test.item_unavailable");
//        }
//
//        xPos = Screen.width - width - 5.0f;
//        yPos = 5.0f;
//
//        if (GUI.Button(new Rect(xPos, yPos, width, height), "Test Purchase Canceled")) {
//            OpenIAB.purchaseProduct("android.test.canceled");
//        }
//
//        if (GUI.Button(new Rect(xPos, yPos += heightPlus, width, height), "Query Inventory")) {
//            OpenIAB.queryInventory(new string[] { SKU });
//        }
//
//        if (GUI.Button(new Rect(xPos, yPos += heightPlus, width, height), "Purchase Real Product")) {
//            OpenIAB.purchaseProduct(SKU);
//        }
//
//        if (GUI.Button(new Rect(xPos, yPos += heightPlus, width, height), "Consume Real Product")) {
//            OpenIAB.consumeProduct(Purchase.CreateFromSku(SKU));
//        }
//    }
#endif

#if UNITY_WP8
    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 10, Screen.width * 0.3f, Screen.height * 0.1f), "QUERY INVENTORY"))
        {
            OpenIAB.queryInventory(new string[] { SKU_AMMO, SKU_MEDKIT, SKU_SUBSCRIPTION });
        }
        if (GUI.Button(new Rect(20 + Screen.width * 0.3f, 10, Screen.width * 0.3f, Screen.height * 0.1f), "Purchase"))
        {
            OpenIAB.purchaseProduct(SKU_MEDKIT);
        }
        if (GUI.Button(new Rect(30 + Screen.width * 0.6f, 10, Screen.width * 0.3f, Screen.height * 0.1f), "Consume"))
        {
            OpenIAB.consumeProduct(Purchase.CreateFromSku(SKU_MEDKIT));
        }
        GUI.Label(new Rect(10, 20 + Screen.height * 0.1f, Screen.width, Screen.height), _label);
    }
#endif

    private void billingSupportedEvent() {
        _isInitialized = true;
        Debug.Log("billingSupportedEvent");
    }
    private void billingNotSupportedEvent(string error) {
        Debug.Log("billingNotSupportedEvent: " + error);
    }
    private void queryInventorySucceededEvent(Inventory inventory) {
        Debug.Log("queryInventorySucceededEvent: " + inventory);
        if (inventory != null)
            _label = inventory.ToString();
		Purchase fullVersionPurchase = inventory.GetPurchase(SKU);
		bool subscribedFullVersion = (fullVersionPurchase != null && VerifyDeveloperPayload(fullVersionPurchase.DeveloperPayload));
		Debug.Log("User " + (subscribedFullVersion ? "HAS" : "DOES NOT HAVE") + " FULL VERSION.");

		if (subscribedFullVersion) {
			PlayerPrefs.SetInt("p1a5I8d", 951402483);
		}
		else if(!subscribedFullVersion && query)
		{
			query = false;
			PlayerPrefs.SetInt("p1a5I8d", 0);
		}
		else if(!subscribedFullVersion && !query)
		{
			PlayerPrefs.SetInt("p1a5I8d", 0);
			OpenIAB.purchaseProduct("missileman.paid");
		}

    }
    private void queryInventoryFailedEvent(string error) {
		Debug.Log("queryInventoryFailedEvent: " + error);
        _label = error;
    }
    private void purchaseSucceededEvent(Purchase purchase) {
        Debug.Log("purchaseSucceededEvent: " + purchase);
        _label = "PURCHASED:" + purchase.ToString();
		Debug.Log(purchase.ToString());
		switch (purchase.Sku) {
		case SKU:
			PlayerPrefs.SetInt("p1a5I8d", 951402483);
			break;
		default:
			Debug.LogWarning("Unknown SKU: " + purchase.Sku);
			break;
		}
//		if(purchase.ToString() == "SKU:missileman.paid;")
//		{
//			PlayerPrefs.SetInt("p1a5I8d", 951402483);
//		}
//		else if(purchase.ToString() == "SKU:android.test.canceled;")
//		{
//			PlayerPrefs.SetInt("p1a5I8d", 0);
//		}
    }
    private void purchaseFailedEvent(int errorCode, string errorMessage) {
        Debug.Log("purchaseFailedEvent: " + errorMessage);
        _label = "Purchase Failed: " + errorMessage;
    }
    private void consumePurchaseSucceededEvent(Purchase purchase) {
        Debug.Log("consumePurchaseSucceededEvent: " + purchase);
        _label = "CONSUMED: " + purchase.ToString();
    }
    private void consumePurchaseFailedEvent(string error) {
        Debug.Log("consumePurchaseFailedEvent: " + error);
        _label = "Consume Failed: " + error;
    }
}