import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Course modules */}
          <div className="bg-[#E8DDD4] rounded-2xl p-8 space-y-8">
            {/* Module 01 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Module 01</h3>
                <span className="bg-[#B8A394] text-white px-3 py-1 rounded-full text-sm font-medium">6 Lessons</span>
              </div>

              <div className="space-y-3">
                <div className="text-gray-800 hover:text-gray-900 cursor-pointer underline">Welcome (Start Here)</div>
                <div className="text-gray-800 hover:text-gray-900 cursor-pointer underline">
                  What is a Digital Product?
                </div>
                <div className="text-gray-800 hover:text-gray-900 cursor-pointer underline">
                  Top Niches & Tools to Start Selling Digital Products.
                </div>
                <div className="text-gray-800 hover:text-gray-900 cursor-pointer underline">Make a Perfect Store</div>
                <div className="text-gray-700">And more...</div>
              </div>
            </div>

            {/* Module 02 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">MODULE 02</h3>
                <span className="bg-[#B8A394] text-white px-3 py-1 rounded-full text-sm font-medium">12 Lessons</span>
              </div>

              <div className="space-y-3">
                <div className="text-gray-800 hover:text-gray-900 cursor-pointer underline">
                  The Smartest Path to Your First 10,000 Followers
                </div>
                <div className="text-gray-800 hover:text-gray-900 cursor-pointer underline">
                  How to Convert More Viewers Into Followers
                </div>
                <div className="text-gray-800 hover:text-gray-900 cursor-pointer underline">Training The Algorithm</div>
                <div className="text-gray-700">And more...</div>
              </div>
            </div>
          </div>

          {/* Right side - Device mockups */}
          <div className="relative">
            <Image
              src="/modules-image.png"
              alt="Course content displayed on multiple devices showing Canva interface"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
