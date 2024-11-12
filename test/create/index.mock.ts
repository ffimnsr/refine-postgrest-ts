import nock from "nock";

nock("https://fake-api.play.postgrest.local:443", {
  encodedQueryParams: true,
})
  .post("/posts", {
    title: "foo",
    slug: "foo-bar",
    content: "bar",
    categoryId: 2,
  })
  .query({ select: "%2A" })
  .reply(
    201,
    [
      {
        id: 12893,
        title: "foo",
        slug: "foo-bar",
        createdAt: "2024-04-25T08:58:15.561287+00:00",
        content: "bar",
        categoryId: 2,
        images: null,
      },
    ],
    [
      "Date",
      "Thu, 25 Apr 2024 08:58:15 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Content-Range",
      "*/*",
      "CF-Ray",
      "879d2155cf286970-IST",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Origin",
      "*",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "Via",
      "kong/2.8.1",
      "content-profile",
      "public",
      "sb-gateway-version",
      "1",
      "x-kong-proxy-latency",
      "3",
      "x-kong-upstream-latency",
      "7",
      "Vary",
      "Accept-Encoding",
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400',
    ],
  );

nock("https://fake-api.play.postgrest.local:443", {
  encodedQueryParams: true,
})
  .post("/posts", {
    title: "foo",
    slug: "foo-bar",
    content: "bar",
    categoryId: 2,
  })
  .query({ select: "%2A" })
  .reply(
    201,
    [
      {
        id: 12894,
        title: "foo",
        slug: "foo-bar",
        createdAt: "2024-04-25T08:58:15.88472+00:00",
        content: "bar",
        categoryId: 2,
        images: null,
      },
    ],
    [
      "Date",
      "Thu, 25 Apr 2024 08:58:15 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Content-Range",
      "*/*",
      "CF-Ray",
      "879d21585813724e-IST",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Origin",
      "*",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "Via",
      "kong/2.8.1",
      "content-profile",
      "public",
      "sb-gateway-version",
      "1",
      "x-kong-proxy-latency",
      "0",
      "x-kong-upstream-latency",
      "7",
      "Vary",
      "Accept-Encoding",
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400',
    ],
  );

nock("https://fake-api.play.postgrest.local:443", {
  encodedQueryParams: true,
})
  .post("/posts", {})
  .query({ select: "%2A" })
  .reply(
    406,
    {
      code: "PGRST106",
      details: null,
      hint: null,
      message: "The schema must be one of the following: public, storage",
    },
    [
      "Date",
      "Thu, 25 Apr 2024 08:58:16 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "879d2159d8847212-IST",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Origin",
      "*",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "Via",
      "kong/2.8.1",
      "sb-gateway-version",
      "1",
      "x-kong-proxy-latency",
      "1",
      "x-kong-upstream-latency",
      "0",
      "Vary",
      "Accept-Encoding",
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400',
    ],
  );