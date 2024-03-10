"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex flex-col items-center  justify-center">
      <h2 className="text-center">
        Something went wrong!
        {error.message}
      </h2>
      <button
        className="mt-4 rounded-md bg-sigSurface px-4 py-2 text-sm text-white transition-colors hover:bg-main"
        onClick={
          // Attempt to recover by trying to re-render the auth route segments
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  )
}

/**
 * Tệp error.tsx có thể được sử dụng để xác định ranh giới giao diện người dùng cho một đoạn tuyến đường. 
 * Nó đóng vai trò như một công cụ tổng hợp các lỗi không mong muốn và cho phép bạn hiển thị giao diện người dùng dự phòng cho người dùng của mình.
**/

// There are a few things you'll notice about the code above:

// "use client" - error.tsx needs to be a Client Component.
// It accepts two props:
// error: This object is an instance of JavaScript's native Error object.
// reset: This is a function to reset the error boundary. When executed, the function will try to re-render the route segment.
