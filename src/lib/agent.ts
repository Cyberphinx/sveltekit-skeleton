import { error, type NumericRange } from "@sveltejs/kit"

async function send({
  method,
  path,
  data,
  token,
}: {
  method: string
  path: string
  data?: Record<string, unknown>
  token?: string
}) {
  const opts: RequestInit = { method, headers: {} }

  // A Headers object can be assigned to HeadersInit.
  // const means the variable is immutable, not its content.
  const reqHeaders = new Headers(opts.headers)

  if (data !== undefined) {
    reqHeaders.set("Content-Type", "application/json")
    // opts.headers = {
    // 	'Content-Type': 'application/json'
    // };
    opts.body = JSON.stringify(data)
  }

  if (token) {
    reqHeaders.set("Authorization", `Bearer ${token}`)
    // opts.headers['Authorization'] = `Bearer ${token}`;
  }

  opts.headers = reqHeaders

  // console.log(path);

  const response = await fetch(path, opts)

  if (response.ok || response.status === 422) {
    // get the json of the response
    const result = await response.json()

    // add pagination header to the result object
    const paginationHeader = response.headers.get("pagination")
    if (paginationHeader) result.pagination = paginationHeader

    return result ? result : {}
  }

  throw error(response.status as NumericRange<400, 599>)
}

export function get(path: string, token?: string) {
  return send({ method: "GET", path, token })
}

export function del(path: string, token: string) {
  return send({ method: "DELETE", path, token })
}

export function post(
  path: string,
  data: Record<string, unknown>,
  token?: string,
) {
  return send({ method: "POST", path, data, token })
}

export function put(
  path: string,
  data: Record<string, unknown>,
  token: string,
) {
  return send({ method: "PUT", path, data, token })
}
