from tqsdk import TqApi, TqAuth
api = TqApi(auth=TqAuth("13396551860", "jlnd14118"))
quote = api.get_quote("SHFE.ni2105")
print(quote.last_price, quote.volume)