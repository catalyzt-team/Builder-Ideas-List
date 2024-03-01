import Link from 'next/link'
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 bg-white px-10 py-4 w-full z-30 shadow-xl">
      <section>

        <Link href="/"><svg width="247" height="37" viewBox="0 0 782 169" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="522" y="17" width="260" height="137" rx="68.5" fill="#FF0000" />
          <path d="M584.311 117C583.724 117 583.244 116.813 582.871 116.44C582.497 116.067 582.311 115.587 582.311 115V63C582.311 62.4133 582.497 61.9333 582.871 61.56C583.244 61.1867 583.724 61 584.311 61H593.031C593.617 61 594.097 61.1867 594.471 61.56C594.844 61.9333 595.031 62.4133 595.031 63V83H616.711V63C616.711 62.4133 616.897 61.9333 617.271 61.56C617.644 61.1867 618.124 61 618.711 61H627.431C628.017 61 628.497 61.1867 628.871 61.56C629.244 61.9333 629.431 62.4133 629.431 63V115C629.431 115.587 629.244 116.067 628.871 116.44C628.497 116.813 628.017 117 627.431 117H618.711C618.124 117 617.644 116.813 617.271 116.44C616.897 116.067 616.711 115.587 616.711 115V94.36H595.031V115C595.031 115.587 594.844 116.067 594.471 116.44C594.097 116.813 593.617 117 593.031 117H584.311ZM655.695 117.8C652.602 117.8 649.855 117.107 647.455 115.72C645.108 114.28 643.268 112.227 641.935 109.56C640.655 106.84 640.015 103.56 640.015 99.72V77.4C640.015 76.8133 640.202 76.3333 640.575 75.96C640.948 75.5867 641.402 75.4 641.935 75.4H650.415C651.002 75.4 651.482 75.5867 651.855 75.96C652.228 76.3333 652.415 76.8133 652.415 77.4V99.24C652.415 105.213 655.028 108.2 660.255 108.2C662.762 108.2 664.735 107.427 666.175 105.88C667.668 104.28 668.415 102.067 668.415 99.24V77.4C668.415 76.8133 668.602 76.3333 668.975 75.96C669.348 75.5867 669.828 75.4 670.415 75.4H678.895C679.428 75.4 679.882 75.5867 680.255 75.96C680.628 76.3333 680.815 76.8133 680.815 77.4V115C680.815 115.587 680.628 116.067 680.255 116.44C679.882 116.813 679.428 117 678.895 117H671.055C670.468 117 669.988 116.813 669.615 116.44C669.242 116.067 669.055 115.587 669.055 115V111.88C667.668 113.8 665.882 115.267 663.695 116.28C661.508 117.293 658.842 117.8 655.695 117.8ZM715.044 117.8C712.004 117.8 709.47 117.293 707.444 116.28C705.417 115.213 703.764 113.88 702.484 112.28V115C702.484 115.587 702.297 116.067 701.924 116.44C701.55 116.813 701.07 117 700.484 117H692.884C692.297 117 691.817 116.813 691.444 116.44C691.07 116.067 690.884 115.587 690.884 115V62.2C690.884 61.6133 691.07 61.1333 691.444 60.76C691.817 60.3867 692.297 60.2 692.884 60.2H701.124C701.657 60.2 702.11 60.3867 702.484 60.76C702.857 61.1333 703.044 61.6133 703.044 62.2V79.64C704.377 78.1467 706.03 76.9467 708.004 76.04C709.977 75.08 712.324 74.6 715.044 74.6C717.817 74.6 720.217 75.08 722.244 76.04C724.324 76.9467 726.084 78.2533 727.524 79.96C728.964 81.6133 730.057 83.5867 730.804 85.88C731.604 88.1733 732.03 90.7067 732.084 93.48C732.137 94.44 732.164 95.3467 732.164 96.2C732.164 97 732.137 97.9067 732.084 98.92C731.977 101.747 731.524 104.333 730.724 106.68C729.977 108.973 728.884 110.973 727.444 112.68C726.057 114.333 724.324 115.613 722.244 116.52C720.217 117.373 717.817 117.8 715.044 117.8ZM711.444 108.2C713.47 108.2 715.07 107.773 716.244 106.92C717.417 106.013 718.244 104.84 718.724 103.4C719.257 101.96 719.577 100.387 719.684 98.68C719.79 97.0267 719.79 95.3733 719.684 93.72C719.577 92.0133 719.257 90.44 718.724 89C718.244 87.56 717.417 86.4133 716.244 85.56C715.07 84.6533 713.47 84.2 711.444 84.2C709.524 84.2 707.95 84.6267 706.724 85.48C705.55 86.3333 704.644 87.4267 704.004 88.76C703.417 90.04 703.097 91.4267 703.044 92.92C702.99 93.88 702.964 94.8667 702.964 95.88C702.964 96.8933 702.99 97.9067 703.044 98.92C703.15 100.52 703.47 102.013 704.004 103.4C704.537 104.787 705.417 105.933 706.644 106.84C707.87 107.747 709.47 108.2 711.444 108.2Z" fill="white" />
          <path d="M4.416 90C3.712 90 3.168 89.776 2.784 89.328C2.464 88.88 2.368 88.304 2.496 87.6L15.744 25.2C15.872 24.496 16.224 23.92 16.8 23.472C17.376 23.024 18.016 22.8 18.72 22.8H44.832C53.088 22.8 59.168 24.72 63.072 28.56C67.04 32.336 68.288 37.712 66.816 44.688C65.856 49.232 63.936 53.072 61.056 56.208C58.24 59.344 54.88 61.712 50.976 63.312L59.136 86.928C59.2 87.12 59.232 87.28 59.232 87.408C59.232 87.536 59.2 87.728 59.136 87.984C59.072 88.496 58.784 88.976 58.272 89.424C57.76 89.808 57.216 90 56.64 90H43.968C42.752 90 41.92 89.712 41.472 89.136C41.088 88.496 40.8 87.92 40.608 87.408L34.176 66.288H24.288L19.776 87.6C19.648 88.304 19.296 88.88 18.72 89.328C18.144 89.776 17.504 90 16.8 90H4.416ZM27.168 52.752H38.304C41.312 52.752 43.712 52.016 45.504 50.544C47.296 49.072 48.48 47.056 49.056 44.496C49.568 42 49.248 39.984 48.096 38.448C47.008 36.912 44.896 36.144 41.76 36.144H30.72L27.168 52.752ZM90.183 90.96C85.191 90.96 80.999 90.064 77.607 88.272C74.279 86.416 71.975 83.664 70.695 80.016C69.479 76.368 69.351 71.888 70.311 66.576C70.439 66.128 70.567 65.552 70.695 64.848C70.823 64.144 70.951 63.6 71.079 63.216C72.359 58.16 74.407 53.84 77.223 50.256C80.039 46.608 83.495 43.856 87.591 42C91.687 40.08 96.199 39.12 101.127 39.12C106.759 39.12 111.143 40.24 114.279 42.48C117.479 44.72 119.591 47.76 120.615 51.6C121.703 55.44 121.735 59.824 120.711 64.752L120.327 67.056C120.199 67.76 119.815 68.336 119.175 68.784C118.599 69.232 117.959 69.456 117.255 69.456H86.631C86.631 69.52 86.599 69.616 86.535 69.744C86.535 69.872 86.503 70 86.439 70.128C86.119 71.984 86.087 73.68 86.343 75.216C86.599 76.752 87.239 77.968 88.263 78.864C89.287 79.76 90.663 80.208 92.391 80.208C93.607 80.208 94.695 80.016 95.655 79.632C96.615 79.184 97.447 78.704 98.151 78.192C98.855 77.616 99.431 77.136 99.879 76.752C100.583 76.112 101.127 75.728 101.511 75.6C101.895 75.408 102.471 75.312 103.239 75.312H115.143C115.783 75.312 116.263 75.504 116.583 75.888C116.903 76.208 116.967 76.688 116.775 77.328C116.455 78.416 115.623 79.728 114.279 81.264C112.999 82.8 111.207 84.336 108.903 85.872C106.599 87.344 103.879 88.56 100.743 89.52C97.607 90.48 94.087 90.96 90.183 90.96ZM88.647 59.952H104.871L104.967 59.76C105.479 57.712 105.543 55.92 105.159 54.384C104.839 52.848 104.135 51.664 103.047 50.832C102.023 50 100.647 49.584 98.919 49.584C97.191 49.584 95.623 50 94.215 50.832C92.871 51.664 91.719 52.848 90.759 54.384C89.863 55.92 89.159 57.712 88.647 59.76V59.952ZM149.012 90C144.596 90 140.948 89.36 138.068 88.08C135.252 86.736 133.332 84.688 132.308 81.936C131.284 79.12 131.22 75.504 132.116 71.088L136.052 52.656H128.564C127.86 52.656 127.316 52.432 126.932 51.984C126.612 51.536 126.516 50.96 126.644 50.256L128.276 42.48C128.404 41.776 128.756 41.2 129.332 40.752C129.908 40.304 130.516 40.08 131.156 40.08H138.74L142.1 24.24C142.228 23.536 142.548 22.96 143.06 22.512C143.636 22.064 144.276 21.84 144.98 21.84H156.116C156.756 21.84 157.268 22.064 157.652 22.512C158.036 22.96 158.164 23.536 158.036 24.24L154.676 40.08H166.676C167.38 40.08 167.892 40.304 168.212 40.752C168.596 41.2 168.724 41.776 168.596 42.48L166.964 50.256C166.836 50.96 166.484 51.536 165.908 51.984C165.332 52.432 164.724 52.656 164.084 52.656H151.988L148.34 69.744C148.084 71.216 147.956 72.496 147.956 73.584C147.956 74.608 148.276 75.408 148.916 75.984C149.556 76.56 150.612 76.848 152.084 76.848H159.764C160.404 76.848 160.884 77.072 161.204 77.52C161.588 77.968 161.716 78.544 161.588 79.248L159.86 87.6C159.732 88.304 159.38 88.88 158.804 89.328C158.292 89.776 157.684 90 156.98 90H149.012ZM169.643 90C168.939 90 168.395 89.776 168.011 89.328C167.627 88.88 167.499 88.304 167.627 87.6L177.227 42.48C177.355 41.84 177.707 41.296 178.283 40.848C178.859 40.336 179.499 40.08 180.203 40.08H191.243C191.947 40.08 192.459 40.336 192.779 40.848C193.163 41.296 193.291 41.84 193.163 42.48L192.395 46.32C193.931 44.4 195.851 42.896 198.155 41.808C200.459 40.656 203.307 40.08 206.699 40.08H212.171C212.811 40.08 213.291 40.304 213.611 40.752C213.995 41.2 214.123 41.776 213.995 42.48L211.979 52.368C211.851 53.008 211.499 53.584 210.923 54.096C210.347 54.544 209.707 54.768 209.003 54.768H199.691C197.067 54.768 194.891 55.504 193.163 56.976C191.435 58.384 190.283 60.4 189.707 63.024L184.427 87.6C184.299 88.304 183.947 88.88 183.371 89.328C182.859 89.776 182.251 90 181.547 90H169.643ZM235.025 90.96C229.905 90.96 225.617 90.096 222.161 88.368C218.705 86.64 216.209 84.176 214.673 80.976C213.201 77.712 212.817 73.84 213.521 69.36C213.649 68.08 213.873 66.64 214.193 65.04C214.577 63.376 214.961 61.936 215.345 60.72C216.561 56.176 218.417 52.304 220.913 49.104C223.409 45.904 226.609 43.44 230.513 41.712C234.417 39.984 239.057 39.12 244.433 39.12C249.489 39.12 253.745 39.984 257.201 41.712C260.657 43.44 263.185 45.904 264.785 49.104C266.385 52.304 266.833 56.176 266.129 60.72C265.873 61.936 265.585 63.376 265.265 65.04C264.945 66.64 264.625 68.08 264.305 69.36C263.089 73.84 261.265 77.712 258.833 80.976C256.401 84.176 253.233 86.64 249.329 88.368C245.425 90.096 240.657 90.96 235.025 90.96ZM236.465 79.248C239.345 79.248 241.681 78.384 243.473 76.656C245.265 74.928 246.609 72.336 247.505 68.88C247.761 67.92 248.049 66.64 248.369 65.04C248.753 63.44 249.009 62.16 249.137 61.2C249.713 57.808 249.553 55.248 248.657 53.52C247.761 51.728 245.873 50.832 242.993 50.832C240.241 50.832 237.937 51.728 236.081 53.52C234.289 55.248 232.977 57.808 232.145 61.2C231.889 62.16 231.569 63.44 231.185 65.04C230.865 66.64 230.641 67.92 230.513 68.88C229.937 72.336 230.065 74.928 230.897 76.656C231.793 78.384 233.649 79.248 236.465 79.248ZM272.885 90C272.245 90 271.733 89.776 271.349 89.328C270.965 88.88 270.837 88.304 270.965 87.6L284.213 25.2C284.341 24.496 284.693 23.92 285.269 23.472C285.845 23.024 286.453 22.8 287.093 22.8H312.629C316.533 22.8 320.053 23.248 323.189 24.144C326.389 25.04 329.045 26.416 331.157 28.272C333.269 30.128 334.741 32.464 335.573 35.28C336.405 38.032 336.437 41.264 335.669 44.976C334.069 52.336 330.805 57.776 325.877 61.296C321.013 64.816 314.453 66.576 306.197 66.576H293.237L288.821 87.6C288.693 88.304 288.341 88.88 287.765 89.328C287.253 89.776 286.645 90 285.941 90H272.885ZM295.733 53.328H306.773C309.397 53.328 311.733 52.624 313.781 51.216C315.893 49.808 317.269 47.664 317.909 44.784C318.229 43.12 318.293 41.648 318.101 40.368C317.909 39.088 317.237 38.064 316.085 37.296C314.997 36.528 313.301 36.144 310.997 36.144H299.477L295.733 53.328ZM364.256 90.96C358.176 90.96 353.152 89.968 349.184 87.984C345.28 85.936 342.528 82.992 340.928 79.152C339.328 75.248 339.008 70.512 339.968 64.944C340.48 62.192 341.056 59.28 341.696 56.208C342.4 53.072 343.072 50.096 343.712 47.28C345.056 41.84 347.36 37.232 350.624 33.456C353.888 29.68 357.92 26.8 362.72 24.816C367.584 22.832 372.992 21.84 378.944 21.84C383.744 21.84 387.872 22.448 391.328 23.664C394.784 24.816 397.568 26.384 399.68 28.368C401.792 30.352 403.264 32.528 404.096 34.896C404.928 37.264 405.12 39.6 404.672 41.904C404.608 42.48 404.32 42.96 403.808 43.344C403.36 43.728 402.816 43.92 402.176 43.92H388.16C387.52 43.92 387.04 43.824 386.72 43.632C386.4 43.376 386.144 43.024 385.952 42.576C385.76 41.616 385.344 40.624 384.704 39.6C384.064 38.512 383.072 37.584 381.728 36.816C380.384 36.048 378.464 35.664 375.968 35.664C372.384 35.664 369.312 36.624 366.752 38.544C364.256 40.464 362.496 43.536 361.472 47.76C360.832 50.512 360.192 53.296 359.552 56.112C358.976 58.864 358.432 61.648 357.92 64.464C357.152 68.944 357.632 72.176 359.359 74.16C361.152 76.144 363.872 77.136 367.52 77.136C369.888 77.136 372.096 76.72 374.144 75.888C376.256 75.056 378.048 73.776 379.52 72.048C380.992 70.256 381.984 67.984 382.496 65.232L382.88 63.408H373.856C373.152 63.408 372.608 63.184 372.224 62.736C371.904 62.224 371.808 61.616 371.936 60.912L373.472 53.808C373.6 53.104 373.952 52.528 374.528 52.08C375.104 51.568 375.712 51.312 376.352 51.312H400.64C401.344 51.312 401.856 51.568 402.176 52.08C402.496 52.528 402.592 53.104 402.464 53.808L400.16 64.752C399.072 70.256 396.832 74.96 393.44 78.864C390.112 82.768 385.92 85.776 380.864 87.888C375.872 89.936 370.336 90.96 364.256 90.96ZM406.853 90C406.213 90 405.701 89.776 405.317 89.328C404.933 88.88 404.805 88.304 404.933 87.6L418.181 25.2C418.309 24.496 418.661 23.92 419.237 23.472C419.813 23.024 420.421 22.8 421.061 22.8H465.221C465.925 22.8 466.437 23.024 466.757 23.472C467.141 23.92 467.269 24.496 467.141 25.2L465.125 34.896C464.997 35.6 464.645 36.176 464.069 36.624C463.493 37.072 462.853 37.296 462.149 37.296H432.581L429.605 51.408H457.253C457.957 51.408 458.469 51.664 458.789 52.176C459.173 52.624 459.301 53.2 459.173 53.904L457.061 63.504C456.997 64.144 456.677 64.72 456.101 65.232C455.525 65.68 454.885 65.904 454.181 65.904H426.533L421.829 87.6C421.701 88.304 421.349 88.88 420.773 89.328C420.261 89.776 419.653 90 418.949 90H406.853Z" fill="black" />
          <path d="M84.208 154.48C82.032 154.48 80.112 154.192 78.448 153.616C76.816 153.04 75.472 152.192 74.416 151.072C73.392 149.92 72.688 148.544 72.304 146.944C71.92 145.344 71.904 143.52 72.256 141.472C72.48 140.16 72.752 138.752 73.072 137.248C73.424 135.744 73.76 134.304 74.08 132.928C74.784 130.24 75.824 127.92 77.2 125.968C78.608 124.016 80.4 122.528 82.576 121.504C84.752 120.448 87.344 119.92 90.352 119.92C92.496 119.92 94.4 120.192 96.064 120.736C97.728 121.28 99.104 122.064 100.192 123.088C101.312 124.112 102.096 125.296 102.544 126.64C102.992 127.984 103.056 129.456 102.736 131.056C102.704 131.344 102.592 131.584 102.4 131.776C102.208 131.968 101.968 132.064 101.68 132.064H97.072C96.688 132.064 96.384 131.984 96.16 131.824C95.968 131.632 95.872 131.328 95.872 130.912C95.968 128.864 95.456 127.44 94.336 126.64C93.248 125.84 91.776 125.44 89.92 125.44C87.776 125.44 85.904 126.048 84.304 127.264C82.704 128.448 81.568 130.416 80.896 133.168C80.224 135.792 79.648 138.48 79.168 141.232C78.688 143.984 78.928 145.968 79.888 147.184C80.88 148.368 82.448 148.96 84.592 148.96C86.448 148.96 88.096 148.576 89.536 147.808C91.008 147.008 92.208 145.568 93.136 143.488C93.36 143.04 93.584 142.736 93.808 142.576C94.032 142.416 94.32 142.336 94.672 142.336H99.328C99.616 142.336 99.84 142.432 100 142.624C100.16 142.816 100.208 143.056 100.144 143.344C99.728 144.88 99.088 146.336 98.224 147.712C97.392 149.056 96.304 150.24 94.96 151.264C93.648 152.256 92.096 153.04 90.304 153.616C88.544 154.192 86.512 154.48 84.208 154.48ZM114.142 154.48C111.71 154.48 109.678 154.032 108.046 153.136C106.446 152.24 105.294 150.976 104.59 149.344C103.918 147.712 103.758 145.808 104.11 143.632C104.206 143.056 104.334 142.352 104.494 141.52C104.686 140.688 104.862 139.984 105.022 139.408C105.598 137.2 106.478 135.296 107.662 133.696C108.878 132.064 110.414 130.8 112.27 129.904C114.158 129.008 116.382 128.56 118.942 128.56C121.374 128.56 123.39 129.008 124.99 129.904C126.622 130.8 127.79 132.064 128.494 133.696C129.198 135.296 129.374 137.2 129.022 139.408C128.894 139.984 128.75 140.688 128.59 141.52C128.43 142.352 128.27 143.056 128.11 143.632C127.534 145.808 126.654 147.712 125.47 149.344C124.318 150.976 122.798 152.24 120.91 153.136C119.054 154.032 116.798 154.48 114.142 154.48ZM114.622 149.728C116.35 149.728 117.806 149.2 118.99 148.144C120.206 147.056 121.086 145.472 121.63 143.392C121.758 142.912 121.902 142.288 122.062 141.52C122.222 140.752 122.35 140.128 122.446 139.648C122.798 137.6 122.654 136.032 122.014 134.944C121.374 133.856 120.19 133.312 118.462 133.312C116.766 133.312 115.31 133.856 114.094 134.944C112.878 136.032 112.014 137.6 111.502 139.648C111.374 140.128 111.214 140.752 111.022 141.52C110.862 142.288 110.75 142.912 110.686 143.392C110.334 145.472 110.462 147.056 111.07 148.144C111.71 149.2 112.894 149.728 114.622 149.728ZM132.469 154C132.149 154 131.893 153.888 131.701 153.664C131.541 153.44 131.493 153.168 131.557 152.848L136.357 130.192C136.421 129.872 136.581 129.6 136.837 129.376C137.125 129.152 137.429 129.04 137.749 129.04H141.493C141.813 129.04 142.053 129.152 142.213 129.376C142.373 129.6 142.421 129.872 142.357 130.192L142.021 131.824C142.629 131.216 143.253 130.672 143.893 130.192C144.565 129.68 145.333 129.28 146.197 128.992C147.061 128.704 148.069 128.56 149.221 128.56C151.077 128.56 152.597 128.944 153.781 129.712C154.997 130.448 155.813 131.488 156.229 132.832C157.253 131.552 158.437 130.528 159.781 129.76C161.125 128.96 162.693 128.56 164.485 128.56C166.213 128.56 167.701 128.944 168.949 129.712C170.229 130.48 171.125 131.648 171.637 133.216C172.149 134.752 172.165 136.704 171.685 139.072L168.709 152.848C168.645 153.168 168.485 153.44 168.229 153.664C167.973 153.888 167.685 154 167.365 154H163.429C163.109 154 162.853 153.888 162.661 153.664C162.501 153.44 162.453 153.168 162.517 152.848L165.349 139.456C165.669 138.016 165.733 136.88 165.541 136.048C165.349 135.184 164.949 134.576 164.341 134.224C163.765 133.872 163.061 133.696 162.229 133.696C161.493 133.696 160.709 133.872 159.877 134.224C159.077 134.576 158.325 135.184 157.621 136.048C156.949 136.88 156.469 138.016 156.181 139.456L153.301 152.848C153.237 153.168 153.077 153.44 152.821 153.664C152.565 153.888 152.277 154 151.957 154H148.021C147.669 154 147.397 153.888 147.205 153.664C147.045 153.44 146.997 153.168 147.061 152.848L149.941 139.456C150.229 138.016 150.261 136.88 150.037 136.048C149.845 135.184 149.461 134.576 148.885 134.224C148.309 133.872 147.605 133.696 146.773 133.696C146.069 133.696 145.301 133.888 144.469 134.272C143.637 134.624 142.869 135.216 142.165 136.048C141.493 136.88 141.013 138.016 140.725 139.456L137.845 152.848C137.781 153.168 137.621 153.44 137.365 153.664C137.109 153.888 136.821 154 136.501 154H132.469ZM175.828 154C175.508 154 175.252 153.888 175.06 153.664C174.9 153.44 174.852 153.168 174.916 152.848L179.716 130.192C179.78 129.872 179.94 129.6 180.196 129.376C180.484 129.152 180.788 129.04 181.108 129.04H184.852C185.172 129.04 185.412 129.152 185.572 129.376C185.732 129.6 185.78 129.872 185.716 130.192L185.38 131.824C185.988 131.216 186.612 130.672 187.252 130.192C187.924 129.68 188.692 129.28 189.556 128.992C190.42 128.704 191.428 128.56 192.58 128.56C194.436 128.56 195.956 128.944 197.14 129.712C198.356 130.448 199.172 131.488 199.588 132.832C200.612 131.552 201.796 130.528 203.14 129.76C204.484 128.96 206.052 128.56 207.844 128.56C209.572 128.56 211.06 128.944 212.308 129.712C213.588 130.48 214.484 131.648 214.996 133.216C215.508 134.752 215.524 136.704 215.044 139.072L212.068 152.848C212.004 153.168 211.844 153.44 211.588 153.664C211.332 153.888 211.044 154 210.724 154H206.788C206.468 154 206.212 153.888 206.02 153.664C205.86 153.44 205.812 153.168 205.876 152.848L208.708 139.456C209.028 138.016 209.092 136.88 208.9 136.048C208.708 135.184 208.308 134.576 207.7 134.224C207.124 133.872 206.42 133.696 205.588 133.696C204.852 133.696 204.068 133.872 203.236 134.224C202.436 134.576 201.684 135.184 200.98 136.048C200.308 136.88 199.828 138.016 199.54 139.456L196.66 152.848C196.596 153.168 196.436 153.44 196.18 153.664C195.924 153.888 195.636 154 195.316 154H191.38C191.028 154 190.756 153.888 190.564 153.664C190.404 153.44 190.356 153.168 190.42 152.848L193.3 139.456C193.588 138.016 193.62 136.88 193.396 136.048C193.204 135.184 192.82 134.576 192.244 134.224C191.668 133.872 190.964 133.696 190.132 133.696C189.428 133.696 188.66 133.888 187.828 134.272C186.996 134.624 186.228 135.216 185.524 136.048C184.852 136.88 184.372 138.016 184.084 139.456L181.204 152.848C181.14 153.168 180.98 153.44 180.724 153.664C180.468 153.888 180.18 154 179.86 154H175.828ZM227.636 154.48C225.556 154.48 223.86 154.048 222.548 153.184C221.236 152.288 220.356 151.04 219.908 149.44C219.492 147.808 219.508 145.888 219.956 143.68L222.836 130.192C222.9 129.872 223.06 129.6 223.316 129.376C223.604 129.152 223.908 129.04 224.228 129.04H228.452C228.772 129.04 229.012 129.152 229.172 129.376C229.332 129.6 229.38 129.872 229.316 130.192L226.532 143.392C226.244 144.704 226.148 145.808 226.244 146.704C226.372 147.568 226.74 148.224 227.348 148.672C227.956 149.12 228.9 149.344 230.18 149.344C231.908 149.344 233.412 148.816 234.692 147.76C235.972 146.704 236.804 145.248 237.188 143.392L240.02 130.192C240.084 129.872 240.244 129.6 240.5 129.376C240.788 129.152 241.092 129.04 241.412 129.04H245.588C245.94 129.04 246.196 129.152 246.356 129.376C246.516 129.6 246.564 129.872 246.5 130.192L241.7 152.848C241.636 153.168 241.476 153.44 241.22 153.664C240.964 153.888 240.66 154 240.308 154H236.42C236.1 154 235.844 153.888 235.652 153.664C235.492 153.44 235.444 153.168 235.508 152.848L235.892 150.88C235.188 151.616 234.452 152.256 233.684 152.8C232.948 153.344 232.1 153.76 231.14 154.048C230.212 154.336 229.044 154.48 227.636 154.48ZM249 154C248.68 154 248.424 153.888 248.232 153.664C248.072 153.44 248.024 153.168 248.088 152.848L252.888 130.192C252.952 129.872 253.112 129.6 253.368 129.376C253.656 129.152 253.96 129.04 254.28 129.04H258.216C258.536 129.04 258.776 129.152 258.936 129.376C259.096 129.6 259.144 129.872 259.08 130.192L258.648 132.16C259.672 131.136 260.872 130.288 262.248 129.616C263.656 128.912 265.24 128.56 267 128.56C269.176 128.56 270.92 129.008 272.232 129.904C273.544 130.768 274.408 132 274.824 133.6C275.272 135.2 275.256 137.12 274.776 139.36L271.896 152.848C271.832 153.168 271.672 153.44 271.416 153.664C271.16 153.888 270.856 154 270.504 154H266.28C265.96 154 265.704 153.888 265.512 153.664C265.352 153.44 265.304 153.168 265.368 152.848L268.152 139.648C268.568 137.696 268.52 136.224 268.008 135.232C267.528 134.208 266.36 133.696 264.504 133.696C262.68 133.696 261.128 134.224 259.848 135.28C258.6 136.336 257.768 137.792 257.352 139.648L254.568 152.848C254.504 153.168 254.344 153.44 254.088 153.664C253.832 153.888 253.544 154 253.224 154H249ZM278.953 154C278.633 154 278.377 153.888 278.185 153.664C278.025 153.44 277.977 153.168 278.041 152.848L282.841 130.192C282.905 129.872 283.065 129.6 283.321 129.376C283.609 129.152 283.913 129.04 284.233 129.04H288.217C288.569 129.04 288.825 129.152 288.985 129.376C289.145 129.6 289.193 129.872 289.129 130.192L284.329 152.848C284.265 153.168 284.105 153.44 283.849 153.664C283.593 153.888 283.289 154 282.937 154H278.953ZM284.905 124.912C284.585 124.912 284.329 124.816 284.137 124.624C283.977 124.4 283.929 124.112 283.993 123.76L284.761 120.304C284.825 119.984 284.985 119.712 285.241 119.488C285.497 119.264 285.801 119.152 286.153 119.152H290.521C290.841 119.152 291.097 119.264 291.289 119.488C291.481 119.712 291.545 119.984 291.481 120.304L290.713 123.76C290.649 124.112 290.473 124.4 290.185 124.624C289.929 124.816 289.641 124.912 289.321 124.912H284.905ZM301.978 154C299.802 154 298.106 153.664 296.89 152.992C295.674 152.32 294.89 151.328 294.538 150.016C294.186 148.672 294.218 147.008 294.634 145.024L296.986 134.128H293.194C292.874 134.128 292.618 134.016 292.426 133.792C292.266 133.568 292.218 133.296 292.282 132.976L292.858 130.192C292.922 129.872 293.082 129.6 293.338 129.376C293.626 129.152 293.946 129.04 294.298 129.04H298.042L299.77 121.072C299.834 120.752 299.994 120.48 300.25 120.256C300.506 120.032 300.794 119.92 301.114 119.92H305.002C305.354 119.92 305.61 120.032 305.77 120.256C305.962 120.48 306.026 120.752 305.962 121.072L304.234 129.04H310.234C310.554 129.04 310.794 129.152 310.954 129.376C311.146 129.6 311.21 129.872 311.146 130.192L310.57 132.976C310.506 133.296 310.33 133.568 310.042 133.792C309.786 134.016 309.498 134.128 309.178 134.128H303.178L300.97 144.544C300.778 145.408 300.666 146.16 300.634 146.8C300.634 147.408 300.81 147.888 301.162 148.24C301.514 148.56 302.138 148.72 303.034 148.72H306.49C306.842 148.72 307.098 148.832 307.258 149.056C307.418 149.28 307.466 149.552 307.402 149.872L306.778 152.848C306.714 153.168 306.554 153.44 306.298 153.664C306.042 153.888 305.738 154 305.386 154H301.978ZM313.251 163.12C312.867 163.12 312.611 162.96 312.483 162.64C312.355 162.32 312.419 161.968 312.675 161.584L318.531 152.368L313.875 130.384C313.811 130.032 313.875 129.728 314.067 129.472C314.259 129.184 314.595 129.04 315.075 129.04H318.675C319.059 129.04 319.331 129.136 319.491 129.328C319.651 129.488 319.747 129.696 319.779 129.952L322.995 145.696L332.979 129.952C333.139 129.696 333.331 129.488 333.555 129.328C333.811 129.136 334.131 129.04 334.515 129.04H338.643C338.963 129.04 339.203 129.184 339.363 129.472C339.555 129.728 339.539 130.064 339.315 130.48L318.819 162.208C318.659 162.464 318.451 162.672 318.195 162.832C317.971 163.024 317.667 163.12 317.283 163.12H313.251ZM351.529 154C351.177 154 350.905 153.888 350.713 153.664C350.553 153.44 350.505 153.168 350.569 152.848L357.241 121.6C357.305 121.248 357.465 120.96 357.721 120.736C357.977 120.512 358.281 120.4 358.633 120.4H372.169C374.537 120.4 376.489 120.8 378.025 121.6C379.593 122.368 380.697 123.44 381.337 124.816C381.977 126.192 382.105 127.792 381.721 129.616C381.433 130.928 380.969 132.032 380.329 132.928C379.721 133.824 379.049 134.56 378.313 135.136C377.577 135.68 376.873 136.096 376.201 136.384C377.321 137.024 378.217 138 378.889 139.312C379.593 140.624 379.753 142.208 379.369 144.064C378.953 145.984 378.217 147.696 377.161 149.2C376.105 150.704 374.681 151.888 372.889 152.752C371.097 153.584 368.889 154 366.265 154H351.529ZM358.057 148.912H366.073C367.737 148.912 369.145 148.448 370.297 147.52C371.449 146.56 372.169 145.408 372.457 144.064C372.745 142.656 372.585 141.488 371.977 140.56C371.369 139.632 370.105 139.168 368.185 139.168H360.169L358.057 148.912ZM361.225 134.176H368.617C370.249 134.176 371.609 133.776 372.697 132.976C373.785 132.144 374.489 131.072 374.809 129.76C375.097 128.416 374.937 127.376 374.329 126.64C373.721 125.872 372.585 125.488 370.921 125.488H363.097L361.225 134.176ZM392.448 154.48C390.368 154.48 388.672 154.048 387.36 153.184C386.048 152.288 385.168 151.04 384.72 149.44C384.304 147.808 384.32 145.888 384.768 143.68L387.648 130.192C387.712 129.872 387.872 129.6 388.128 129.376C388.416 129.152 388.72 129.04 389.04 129.04H393.264C393.584 129.04 393.824 129.152 393.984 129.376C394.144 129.6 394.192 129.872 394.128 130.192L391.344 143.392C391.056 144.704 390.96 145.808 391.056 146.704C391.184 147.568 391.552 148.224 392.16 148.672C392.768 149.12 393.712 149.344 394.992 149.344C396.72 149.344 398.224 148.816 399.504 147.76C400.784 146.704 401.616 145.248 402 143.392L404.832 130.192C404.896 129.872 405.056 129.6 405.312 129.376C405.6 129.152 405.904 129.04 406.224 129.04H410.4C410.752 129.04 411.008 129.152 411.168 129.376C411.328 129.6 411.376 129.872 411.312 130.192L406.512 152.848C406.448 153.168 406.288 153.44 406.032 153.664C405.776 153.888 405.472 154 405.12 154H401.232C400.912 154 400.656 153.888 400.464 153.664C400.304 153.44 400.256 153.168 400.32 152.848L400.704 150.88C400 151.616 399.264 152.256 398.496 152.8C397.76 153.344 396.912 153.76 395.952 154.048C395.024 154.336 393.856 154.48 392.448 154.48ZM413.813 154C413.493 154 413.237 153.888 413.045 153.664C412.885 153.44 412.837 153.168 412.901 152.848L417.701 130.192C417.765 129.872 417.925 129.6 418.181 129.376C418.469 129.152 418.773 129.04 419.093 129.04H423.077C423.429 129.04 423.685 129.152 423.845 129.376C424.005 129.6 424.053 129.872 423.989 130.192L419.189 152.848C419.125 153.168 418.965 153.44 418.709 153.664C418.453 153.888 418.149 154 417.797 154H413.813ZM419.765 124.912C419.445 124.912 419.189 124.816 418.997 124.624C418.837 124.4 418.789 124.112 418.853 123.76L419.621 120.304C419.685 119.984 419.845 119.712 420.101 119.488C420.357 119.264 420.661 119.152 421.013 119.152H425.381C425.701 119.152 425.957 119.264 426.149 119.488C426.341 119.712 426.405 119.984 426.341 120.304L425.573 123.76C425.509 124.112 425.333 124.4 425.045 124.624C424.789 124.816 424.501 124.912 424.181 124.912H419.765ZM426.469 154C426.149 154 425.893 153.888 425.701 153.664C425.541 153.44 425.493 153.168 425.557 152.848L432.325 121.072C432.389 120.752 432.549 120.48 432.805 120.256C433.061 120.032 433.349 119.92 433.669 119.92H437.653C438.005 119.92 438.261 120.032 438.421 120.256C438.613 120.48 438.677 120.752 438.613 121.072L431.845 152.848C431.781 153.168 431.621 153.44 431.365 153.664C431.109 153.888 430.805 154 430.453 154H426.469ZM449.54 154C447.364 154 445.668 153.664 444.452 152.992C443.236 152.32 442.452 151.328 442.1 150.016C441.748 148.672 441.78 147.008 442.196 145.024L444.548 134.128H440.756C440.436 134.128 440.18 134.016 439.988 133.792C439.828 133.568 439.78 133.296 439.844 132.976L440.42 130.192C440.484 129.872 440.644 129.6 440.9 129.376C441.188 129.152 441.508 129.04 441.86 129.04H445.604L447.332 121.072C447.396 120.752 447.556 120.48 447.812 120.256C448.068 120.032 448.356 119.92 448.676 119.92H452.564C452.916 119.92 453.172 120.032 453.332 120.256C453.524 120.48 453.588 120.752 453.524 121.072L451.796 129.04H457.796C458.116 129.04 458.356 129.152 458.516 129.376C458.708 129.6 458.772 129.872 458.708 130.192L458.132 132.976C458.068 133.296 457.892 133.568 457.604 133.792C457.348 134.016 457.06 134.128 456.74 134.128H450.74L448.532 144.544C448.34 145.408 448.228 146.16 448.196 146.8C448.196 147.408 448.372 147.888 448.724 148.24C449.076 148.56 449.7 148.72 450.596 148.72H454.052C454.404 148.72 454.66 148.832 454.82 149.056C454.98 149.28 455.028 149.552 454.964 149.872L454.34 152.848C454.276 153.168 454.116 153.44 453.86 153.664C453.604 153.888 453.3 154 452.948 154H449.54Z" fill="black" />
        </svg></Link>
      </section>

      <div className='flex space-x-8 pr-2 items-center'>
        <ul className='flex space-x-8'>
          <li>
            <a href='#'>Explore</a>
          </li>

          <li>
            <a href='#'>Community</a>
          </li>

          <li className='Dropdown flex items-center space-x-10'>
            <a className='flex items-center' href='#'>
              Resources
              <div className="Arrow">
                <svg className="pl-2" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
              </div>
            </a>
          </li>


        </ul>

        <div className='space-x-4'>
          <button className="w-20 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border  border-black">
            Log in
          </button>

          <button className="w-32 bg-black hover:bg-transparent text-white hover:text-black py-2 px-4 border  border-black">
            Get started
          </button>

        </div>
      </div>
    </div>

  )
}
export default Navbar